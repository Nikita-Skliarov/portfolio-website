// Client-side i18n: Dutch is the baseline in index.html, the rest is swapped in here.
// Keys marked data-i18n-html in the HTML may contain markup (hero.sub has a link).
const translations = {
  nl: {
    'meta.title': 'Nikita Skliarov-Napriahlo · Full stack developer',
    'meta.description': 'Portfolio van Nikita Skliarov-Napriahlo, full stack developer bij The Freight Hero B.V. Multi-tenant SaaS, freight-tech, webprojecten en Promobo.',
    'nav.about': 'Over mij',
    'nav.work': 'Werk',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.kicker': 'Full stack developer · Nederland',
    'hero.sub': 'Ik bouw multi-tenant SaaS-platformen, van databaseschema tot de laatste pixel. Op dit moment werk ik aan freight-tech bij <a href="https://thefreighthero.nl" target="_blank" rel="noopener">The&nbsp;Freight&nbsp;Hero&nbsp;B.V.</a>',
    'hero.ctaWork': 'Bekijk mijn werk',
    'hero.ctaContact': 'Stuur een bericht',
    'hero.scroll': 'scroll ↓',
    'about.title': 'Over mij',
    'about.lead': 'Ik ben een full stack developer die het liefst de hele stack in eigen hand heeft: datamodel, API, UI en deployment.',
    'about.p1': 'Overdag werk ik aan een multi-tenant platform voor expediteurs bij The Freight Hero: offertes, tarieven, de levenscyclus van zendingen en de interne tooling die alles draaiend houdt. Type-safe vanaf de database: Prisma, tRPC en Angular.',
    'about.p2': 'Buiten werktijd run ik samen met Jordi Raanhuis Promobo, en er ligt altijd wel een eigen project op tafel. De laatste tijd: een budget-app en een Telegram-bot.',
    'work.title': 'Uitgelicht werk',
    'work.tfh.tag': 'Freight tech · SaaS',
    'work.tfh.text': 'Multi-tenant platform voor expediteurs: direct offertes rekenen, een tariefmotor met ruim 100 kostensoorten, zendingsbeheer en Nederlandse btw-logica. Vervangt de spreadsheets waar de meeste expediteurs nog in werken.',
    'work.tfh.url': 'https://thefreighthero.nl',
    'work.tfh.link': 'thefreighthero.nl →',
    'work.care.tag': 'Goonys · klantwerk',
    'work.care.text': 'Onepager voor een ambulante zorgaanbieder in Hengelo. Ik bouw eraan mee binnen Goonys: Angular 21, Tailwind en hosting op Vercel.',
    'work.moni.tag': 'Goonys · klantwerk',
    'work.moni.text': 'Website voor een praktijk voor relatie- en gezinstherapie in Hengelo. Binnen Goonys samen gebouwd en live gezet: Monique past haar teksten zelf aan in Sanity, en berichten uit het contactformulier komen via Resend rechtstreeks in haar mailbox.',
    'work.ticket.tag': 'Goonys · supporttool',
    'work.ticket.title': 'Goonys Ticket Portal',
    'work.ticket.text': 'Multi-tenant ticketsysteem van Goonys: elke query, route en view ziet alleen de eigen klant. De bijbehorende browserextensie stuurt bij een melding automatisch een screenshot, consolelogs en netwerkdata mee. Draait als eerste bij The Freight Hero.',
    'work.prim.tag': 'Klantwerk',
    'work.prim.text': 'Website voor een Nederlands autobedrijf. Gebouwd, opgeleverd en in onderhoud, zodat de eigenaar er zelf niet naar om hoeft te kijken.',
    'work.promo.tag': 'Partnerschap',
    'work.promo.text': 'Promobo run ik samen met Jordi Raanhuis naast ons werk: websites op abonnement voor ondernemers en clubs in Twente. Eén vast bedrag per maand, en de site blijft gewoon draaien. Uurtje-factuurtje doen we niet.',
    'skills.title': 'Skills & stack',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.data': 'Data & infra',
    'skills.langs': 'Talen',
    'skills.lang1': 'Nederlands',
    'skills.lang2': 'Engels',
    'skills.lang3': 'Oekraïens',
    'skills.lang4': 'Russisch',
    'skills.focus': 'Focus',
    'skills.focus1': 'Multi-tenant SaaS',
    'skills.focus2': "Type-safe API's",
    'skills.focus3': 'Prijs- en tariefengines',
    'skills.focus4': 'Projectarchitectuur',
    'skills.focus5': 'Schaalbaarheid',
    'skills.focus6': 'Performance',
    'contact.title': 'Contact',
    'contact.lead': 'Gewoon mailen. Of het nou om een project gaat of om een vacature, ik schrijf altijd terug.',
    'footer.note': 'Met de hand gecodeerd. Geen framework aan te pas gekomen.',
  },

  en: {
    'meta.title': 'Nikita Skliarov-Napriahlo · Full Stack Developer',
    'meta.description': 'Portfolio of Nikita Skliarov-Napriahlo, full stack developer at The Freight Hero B.V. Multi-tenant SaaS, freight tech, web projects and Promobo.',
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.kicker': 'Full Stack Developer · Netherlands',
    'hero.sub': 'I build multi-tenant SaaS platforms, from the database schema to the last pixel. Right now that\'s freight tech at <a href="https://thefreighthero.com" target="_blank" rel="noopener">The&nbsp;Freight&nbsp;Hero&nbsp;B.V.</a>',
    'hero.ctaWork': 'See my work',
    'hero.ctaContact': 'Get in touch',
    'hero.scroll': 'scroll ↓',
    'about.title': 'About',
    'about.lead': "I'm a full stack developer who likes owning the whole stack: data model, API, UI and deployment.",
    'about.p1': 'My day job is a multi-tenant freight forwarding platform at The Freight Hero: quoting, tariffs, shipment lifecycle and the internal tooling that keeps it running. Type-safe from the database up: Prisma, tRPC and Angular.',
    'about.p2': "Outside work I run Promobo together with Jordi Raanhuis, and there's always some side project on the table. Lately: a budgeting app and a Telegram bot.",
    'work.title': 'Selected work',
    'work.tfh.tag': 'Freight tech · SaaS',
    'work.tfh.text': 'Multi-tenant freight forwarding platform: instant quoting, a tariff engine with over 100 charge types, shipment lifecycle management and Dutch VAT logic. It replaces the spreadsheets most forwarders still run on.',
    'work.tfh.url': 'https://thefreighthero.com',
    'work.tfh.link': 'thefreighthero.com →',
    'work.care.tag': 'Goonys · client work',
    'work.care.text': 'One-page site for an outpatient care provider in Hengelo. I build on it as part of Goonys: Angular 21, Tailwind and hosting on Vercel.',
    'work.moni.tag': 'Goonys · client work',
    'work.moni.text': 'Website for a couples and family therapy practice in Hengelo. Built and launched together within Goonys: Monique edits her own content in Sanity, and contact form messages reach her mailbox directly through Resend.',
    'work.ticket.tag': 'Goonys · support tooling',
    'work.ticket.title': 'Goonys Ticket Portal',
    'work.ticket.text': "Goonys' multi-tenant ticket system: every query, route and view sees its own customer only. The companion browser extension attaches a screenshot, console logs and network data to a ticket automatically. The Freight Hero runs it first.",
    'work.prim.tag': 'Client work',
    'work.prim.text': 'Website for a Dutch automotive business. Built, delivered and maintained, so the owner never has to think about it.',
    'work.promo.tag': 'Partnership',
    'work.promo.text': "Promobo is what Jordi Raanhuis and I run next to our day jobs: subscription websites for entrepreneurs and clubs in Twente. One fixed monthly price, and the site just keeps running. We don't do hourly billing.",
    'skills.title': 'Skills & stack',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.data': 'Data & infra',
    'skills.langs': 'Languages',
    'skills.lang1': 'Dutch',
    'skills.lang2': 'English',
    'skills.lang3': 'Ukrainian',
    'skills.lang4': 'Russian',
    'skills.focus': 'Focus',
    'skills.focus1': 'Multi-tenant SaaS',
    'skills.focus2': 'Type-safe APIs',
    'skills.focus3': 'Pricing and tariff engines',
    'skills.focus4': 'Project architecture',
    'skills.focus5': 'Scaling',
    'skills.focus6': 'Performance',
    'contact.title': 'Contact',
    'contact.lead': "Just send a mail. Whether it's about a project or a role, I always write back.",
    'footer.note': 'Hand-coded. No frameworks harmed.',
  },

  uk: {
    'meta.title': 'Nikita Skliarov-Napriahlo · Full stack розробник',
    'meta.description': 'Портфоліо Nikita Skliarov-Napriahlo, full stack розробника в The Freight Hero B.V. Мультитенантний SaaS, freight-tech, вебпроєкти та Promobo.',
    'nav.about': 'Про мене',
    'nav.work': 'Роботи',
    'nav.skills': 'Навички',
    'nav.contact': 'Контакти',
    'hero.kicker': 'Full stack розробник · Нідерланди',
    'hero.sub': 'Я створюю мультитенантні SaaS-платформи, від схеми бази даних до останнього пікселя. Зараз працюю над freight-tech у <a href="https://thefreighthero.com" target="_blank" rel="noopener">The&nbsp;Freight&nbsp;Hero&nbsp;B.V.</a>',
    'hero.ctaWork': 'Мої роботи',
    'hero.ctaContact': 'Написати мені',
    'hero.scroll': 'гортай ↓',
    'about.title': 'Про мене',
    'about.lead': 'Я full stack розробник, якому подобається тримати весь стек у своїх руках: модель даних, API, інтерфейс і деплой.',
    'about.p1': 'Вдень я працюю над мультитенантною платформою для експедиторів у The Freight Hero: розрахунок котирувань, тарифи, життєвий цикл відправлень і внутрішні інструменти, що тримають усе на ходу. Типобезпечно від бази даних і вище: Prisma, tRPC та Angular.',
    'about.p2': 'Поза роботою ми з Йорді Ранхаусом ведемо Promobo, і завжди є якийсь свій проєкт. Останнім часом це бюджетний застосунок і Telegram-бот.',
    'work.title': 'Вибрані роботи',
    'work.tfh.tag': 'Freight tech · SaaS',
    'work.tfh.text': 'Мультитенантна платформа для експедиторів: миттєві котирування, тарифний движок із понад 100 типами витрат, керування життєвим циклом відправлень і нідерландська логіка ПДВ. Замінює таблиці, в яких досі працює більшість експедиторів.',
    'work.tfh.url': 'https://thefreighthero.com',
    'work.tfh.link': 'thefreighthero.com →',
    'work.care.tag': 'Goonys · робота для клієнта',
    'work.care.text': 'Односторінковий сайт для служби амбулаторного догляду в Хенгело. Я беру участь у розробці в межах Goonys: Angular 21, Tailwind і хостинг на Vercel.',
    'work.moni.tag': 'Goonys · робота для клієнта',
    'work.moni.text': 'Сайт для практики парної та сімейної терапії в Хенгело. Збудували й запустили разом у межах Goonys: Моніка сама редагує тексти в Sanity, а повідомлення з контактної форми через Resend надходять просто на її пошту.',
    'work.ticket.tag': 'Goonys · підтримка',
    'work.ticket.title': 'Goonys Ticket Portal',
    'work.ticket.text': 'Мультитенантна система тикетів від Goonys: кожен запит, маршрут і екран бачать лише свого клієнта. Браузерне розширення саме додає до тикета скриншот, логи консолі й мережеві дані. Першим її використовує The Freight Hero.',
    'work.prim.tag': 'Робота для клієнта',
    'work.prim.text': 'Сайт для нідерландського автобізнесу. Зробив, здав і підтримую, щоб власнику не довелося про нього думати.',
    'work.promo.tag': 'Партнерство',
    'work.promo.text': 'Promobo ми з Йорді Ранхаусом ведемо поза основною роботою: сайти за підпискою для підприємців і клубів у Твенте. Фіксована сума на місяць, і сайт просто працює. Погодинних рахунків не виставляємо.',
    'skills.title': 'Навички та стек',
    'skills.frontend': 'Фронтенд',
    'skills.backend': 'Бекенд',
    'skills.data': 'Дані та інфраструктура',
    'skills.langs': 'Мови',
    'skills.lang1': 'Нідерландська',
    'skills.lang2': 'Англійська',
    'skills.lang3': 'Українська',
    'skills.lang4': 'Російська',
    'skills.focus': 'Фокус',
    'skills.focus1': 'Мультитенантний SaaS',
    'skills.focus2': 'Типобезпечні API',
    'skills.focus3': 'Цінові й тарифні движки',
    'skills.focus4': 'Архітектура проєктів',
    'skills.focus5': 'Масштабування',
    'skills.focus6': 'Продуктивність',
    'contact.title': 'Контакти',
    'contact.lead': 'Просто напишіть. Проєкт це чи вакансія, я відповідаю всім.',
    'footer.note': 'Написано руками. Жоден фреймворк не постраждав.',
  },

  ru: {
    'meta.title': 'Nikita Skliarov-Napriahlo · Full stack разработчик',
    'meta.description': 'Портфолио Nikita Skliarov-Napriahlo, full stack разработчика в The Freight Hero B.V. Мультитенантный SaaS, freight-tech, веб-проекты и Promobo.',
    'nav.about': 'Обо мне',
    'nav.work': 'Работы',
    'nav.skills': 'Навыки',
    'nav.contact': 'Контакты',
    'hero.kicker': 'Full stack разработчик · Нидерланды',
    'hero.sub': 'Я делаю мультитенантные SaaS-платформы, от схемы базы данных до последнего пикселя. Сейчас работаю над freight-tech в <a href="https://thefreighthero.com" target="_blank" rel="noopener">The&nbsp;Freight&nbsp;Hero&nbsp;B.V.</a>',
    'hero.ctaWork': 'Мои работы',
    'hero.ctaContact': 'Написать мне',
    'hero.scroll': 'листай ↓',
    'about.title': 'Обо мне',
    'about.lead': 'Я full stack разработчик, которому нравится держать весь стек в своих руках: модель данных, API, интерфейс и деплой.',
    'about.p1': 'Днём я работаю над мультитенантной платформой для экспедиторов в The Freight Hero: расчёт котировок, тарифы, жизненный цикл отправлений и внутренние инструменты, которые держат всё на ходу. Типобезопасно от базы данных и выше: Prisma, tRPC и Angular.',
    'about.p2': 'Вне работы мы с Йорди Ранхаусом ведём Promobo, и всегда есть какой-то свой проект. В последнее время это бюджетное приложение и Telegram-бот.',
    'work.title': 'Избранные работы',
    'work.tfh.tag': 'Freight tech · SaaS',
    'work.tfh.text': 'Мультитенантная платформа для экспедиторов: мгновенные котировки, тарифный движок с более чем 100 типами расходов, управление жизненным циклом отправлений и нидерландская логика НДС. Заменяет таблицы, в которых до сих пор работает большинство экспедиторов.',
    'work.tfh.url': 'https://thefreighthero.com',
    'work.tfh.link': 'thefreighthero.com →',
    'work.care.tag': 'Goonys · работа для клиента',
    'work.care.text': 'Одностраничный сайт для службы амбулаторного ухода в Хенгело. Я участвую в разработке в составе Goonys: Angular 21, Tailwind и хостинг на Vercel.',
    'work.moni.tag': 'Goonys · работа для клиента',
    'work.moni.text': 'Сайт для практики парной и семейной терапии в Хенгело. Собрали и запустили вместе в составе Goonys: Моника сама редактирует тексты в Sanity, а сообщения с контактной формы через Resend приходят прямо ей на почту.',
    'work.ticket.tag': 'Goonys · поддержка',
    'work.ticket.title': 'Goonys Ticket Portal',
    'work.ticket.text': 'Мультитенантная система тикетов от Goonys: каждый запрос, роут и экран видят только своего клиента. Браузерное расширение само прикладывает к тикету скриншот, логи консоли и сетевые данные. Первым её использует The Freight Hero.',
    'work.prim.tag': 'Работа для клиента',
    'work.prim.text': 'Сайт для нидерландского автобизнеса. Сделал, сдал и поддерживаю, чтобы владельцу не приходилось о нём думать.',
    'work.promo.tag': 'Партнёрство',
    'work.promo.text': 'Promobo мы с Йорди Ранхаусом ведём вне основной работы: сайты по подписке для предпринимателей и клубов в Твенте. Фиксированная сумма в месяц, и сайт просто работает. Почасовых счетов не выставляем.',
    'skills.title': 'Навыки и стек',
    'skills.frontend': 'Фронтенд',
    'skills.backend': 'Бэкенд',
    'skills.data': 'Данные и инфраструктура',
    'skills.langs': 'Языки',
    'skills.lang1': 'Нидерландский',
    'skills.lang2': 'Английский',
    'skills.lang3': 'Украинский',
    'skills.lang4': 'Русский',
    'skills.focus': 'Фокус',
    'skills.focus1': 'Мультитенантный SaaS',
    'skills.focus2': 'Типобезопасные API',
    'skills.focus3': 'Ценовые и тарифные движки',
    'skills.focus4': 'Архитектура проектов',
    'skills.focus5': 'Масштабирование',
    'skills.focus6': 'Производительность',
    'contact.title': 'Контакты',
    'contact.lead': 'Просто напишите. Проект это или вакансия, я отвечаю всем.',
    'footer.note': 'Написано руками. Ни один фреймворк не пострадал.',
  },
};

const SUPPORTED_LANGS = Object.keys(translations);
const LANG_STORAGE_KEY = 'lang';
const TIP_STORAGE_KEY = 'langTipSeen';

// localStorage can throw (private mode, blocked cookies); treat it as best-effort.
function storageGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function storageSet(key, value) {
  try { localStorage.setItem(key, value); } catch { /* best-effort */ }
}

const SITE_URL = 'https://www.nikita-skliarov-napriahlo.nl/';

function langUrl(lang) {
  return lang === 'nl' ? SITE_URL : SITE_URL + '?lang=' + lang;
}

function applyLang(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.title = dict['meta.title'];
  document.querySelector('meta[name="description"]').setAttribute('content', dict['meta.description']);
  // Each language variant self-canonicalizes so the hreflang cluster stays valid.
  document.querySelector('link[rel="canonical"]').setAttribute('href', langUrl(lang));

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.getAttribute('data-i18n')];
    if (value === undefined) return;
    if (el.hasAttribute('data-i18n-html')) el.innerHTML = value;
    else el.textContent = value;
  });

  // The Freight Hero uses .nl for Dutch visitors and .com for the rest.
  const tfhLink = document.getElementById('tfhLink');
  tfhLink.href = dict['work.tfh.url'];
  tfhLink.textContent = dict['work.tfh.link'];

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
}

function setLang(lang) {
  storageSet(LANG_STORAGE_KEY, lang);
  applyLang(lang);
  // Keep the address bar in sync so the shown URL matches the sitemap/hreflang URLs.
  try {
    const url = lang === 'nl' ? location.pathname : location.pathname + '?lang=' + lang;
    history.replaceState(null, '', url);
  } catch { /* file:// and some embeds refuse replaceState */ }
}

// Priority: explicit ?lang= URL (search engines and shared links), then the
// visitor's stored choice, then Dutch.
const paramLang = new URLSearchParams(location.search).get('lang');
const storedLang = storageGet(LANG_STORAGE_KEY);
const initialLang = SUPPORTED_LANGS.includes(paramLang) ? paramLang
  : SUPPORTED_LANGS.includes(storedLang) ? storedLang
  : 'nl';
applyLang(initialLang);

document.querySelectorAll('.lang-switch button').forEach((btn) => {
  btn.addEventListener('click', () => {
    setLang(btn.dataset.lang);
    hideTip();
  });
});

// Language tip: first visit with an English browser gets a heads-up that the
// site defaults to Dutch and the language can be changed.
const tip = document.getElementById('langTip');

function hideTip() {
  if (tip.hidden) return;
  tip.hidden = true;
  storageSet(TIP_STORAGE_KEY, '1');
}

const browserIsEnglish = (navigator.language || '').toLowerCase().startsWith('en');
if (browserIsEnglish && !paramLang && !storedLang && !storageGet(TIP_STORAGE_KEY)) {
  tip.hidden = false;
}

document.getElementById('langTipSwitch').addEventListener('click', () => {
  setLang('en');
  hideTip();
});
document.getElementById('langTipClose').addEventListener('click', hideTip);
