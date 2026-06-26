// Terminal-style Tetris — in the spirit of the original 1984 Electronika 60 build.
// The playfield is drawn as text: a filled cell is "[]", an empty cell is " .".

(() => {
  "use strict";

  const COLS = 10;
  const ROWS = 20;
  const EMPTY = 0;

  // Tetromino definitions as rotation states (each a list of [x,y] offsets).
  const SHAPES = {
    I: [[0, 1], [1, 1], [2, 1], [3, 1]],
    O: [[1, 0], [2, 0], [1, 1], [2, 1]],
    T: [[1, 0], [0, 1], [1, 1], [2, 1]],
    S: [[1, 0], [2, 0], [0, 1], [1, 1]],
    Z: [[0, 0], [1, 0], [1, 1], [2, 1]],
    J: [[0, 0], [0, 1], [1, 1], [2, 1]],
    L: [[2, 0], [0, 1], [1, 1], [2, 1]],
  };
  const TYPES = Object.keys(SHAPES);

  const screen = document.getElementById("screen");

  let grid, current, next, score, lines, level, dropMs, dropAcc, lastTime, paused, over, raf;

  function newBoard() {
    return Array.from({ length: ROWS }, () => new Array(COLS).fill(EMPTY));
  }

  // Rotate a set of cells 90deg clockwise within their bounding box.
  function rotate(cells) {
    const maxX = Math.max(...cells.map((c) => c[0]));
    return cells.map(([x, y]) => [maxX - y, x]);
  }

  function spawn() {
    const type = next || randType();
    next = randType();
    const cells = SHAPES[type].map((c) => [...c]);
    return { type, cells, x: 3, y: 0 };
  }

  function randType() {
    return TYPES[Math.floor(Math.random() * TYPES.length)];
  }

  function cellsAt(piece) {
    return piece.cells.map(([x, y]) => [x + piece.x, y + piece.y]);
  }

  function collides(piece) {
    return cellsAt(piece).some(
      ([x, y]) => x < 0 || x >= COLS || y >= ROWS || (y >= 0 && grid[y][x])
    );
  }

  function lock(piece) {
    cellsAt(piece).forEach(([x, y]) => {
      if (y >= 0) grid[y][x] = 1;
    });
    clearLines();
    current = spawn();
    if (collides(current)) gameOver();
  }

  function clearLines() {
    let cleared = 0;
    for (let y = ROWS - 1; y >= 0; y--) {
      if (grid[y].every((c) => c)) {
        grid.splice(y, 1);
        grid.unshift(new Array(COLS).fill(EMPTY));
        cleared++;
        y++;
      }
    }
    if (cleared) {
      score += [0, 40, 100, 300, 1200][cleared] * level;
      lines += cleared;
      level = Math.floor(lines / 10) + 1;
      dropMs = Math.max(80, 600 - (level - 1) * 50);
    }
  }

  function move(dx, dy) {
    const test = { ...current, x: current.x + dx, y: current.y + dy };
    if (!collides(test)) {
      current = test;
      return true;
    }
    return false;
  }

  function tryRotate() {
    const rotated = { ...current, cells: rotate(current.cells) };
    // Simple wall-kick: try in place, then nudge left/right.
    for (const dx of [0, -1, 1, -2, 2]) {
      const test = { ...rotated, x: rotated.x + dx };
      if (!collides(test)) {
        current = test;
        return;
      }
    }
  }

  function hardDrop() {
    while (move(0, 1)) {}
    lock(current);
  }

  function step() {
    if (!move(0, 1)) lock(current);
  }

  function gameOver() {
    over = true;
    cancelAnimationFrame(raf);
    render();
  }

  function reset() {
    grid = newBoard();
    next = null;
    current = spawn();
    score = 0;
    lines = 0;
    level = 1;
    dropMs = 600;
    dropAcc = 0;
    lastTime = 0;
    paused = false;
    over = false;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(loop);
  }

  function loop(t) {
    if (!lastTime) lastTime = t;
    const dt = t - lastTime;
    lastTime = t;
    if (!paused && !over) {
      dropAcc += dt;
      while (dropAcc >= dropMs) {
        dropAcc -= dropMs;
        step();
      }
    }
    render();
    raf = requestAnimationFrame(loop);
  }

  // Build a 2-char-per-cell text frame with a box border, like the terminal original.
  function render() {
    const view = grid.map((row) => row.slice());
    if (!over) {
      cellsAt(current).forEach(([x, y]) => {
        if (y >= 0 && y < ROWS && x >= 0 && x < COLS) view[y][x] = 2;
      });
    }

    const FILL = "[]";
    const VOID = " .";
    const top = "+" + "--".repeat(COLS) + "+";
    let out = "";
    out += " T E T P И C   1984\n";
    out += top + "\n";
    for (let y = 0; y < ROWS; y++) {
      let line = "!";
      for (let x = 0; x < COLS; x++) line += view[y][x] ? FILL : VOID;
      line += "!";
      out += line + "\n";
    }
    out += top + "\n";
    out += " SCORE " + String(score).padStart(6, "0") + "\n";
    out += " LINES " + String(lines).padStart(6, "0") + "   LVL " + level + "\n";
    out += " NEXT  " + (next || "") + "\n";

    if (paused) out += "\n      -- PAUSED --\n";
    else if (over) out += "\n     -- GAME OVER --\n      press R to retry\n";

    screen.textContent = out;
  }

  document.addEventListener("keydown", (e) => {
    const k = e.key.toLowerCase();
    if (k === "r") {
      reset();
      return;
    }
    if (k === "p") {
      if (!over) paused = !paused;
      return;
    }
    if (paused || over) return;

    switch (e.key) {
      case "ArrowLeft":
        move(-1, 0);
        break;
      case "ArrowRight":
        move(1, 0);
        break;
      case "ArrowDown":
        if (move(0, 1)) score += 1;
        break;
      case "ArrowUp":
      case "z":
      case "Z":
        tryRotate();
        break;
      case " ":
        hardDrop();
        break;
      default:
        return;
    }
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key)) {
      e.preventDefault();
    }
    render();
  });

  reset();
})();
