// Client-side i18n: Dutch is the baseline in index.html, the rest is swapped in here.
// Keys marked data-i18n-html in the HTML may contain markup (hero.sub has a link).
const translations = {
  nl: {
    'meta.title': 'Nikita Skliarov-Napriahlo · Full stack developer',
    'meta.description': 'Portfolio van Nikita Skliarov-Napriahlo, full stack developer bij The Freight Hero B.V. Multi-tenant SaaS, freight-tech en webprojecten.',
    'nav.about': 'Over mij',
    'nav.work': 'Werk',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.kicker': 'Full stack developer · Nederland',
    'hero.sub': 'Ik bouw multi-tenant SaaS-platformen, van databaseschema tot de laatste pixel. Op dit moment werk ik aan freight-tech bij <a href="https://thefreighthero.com" target="_blank" rel="noopener">The&nbsp;Freight&nbsp;Hero&nbsp;B.V.</a>',
    'hero.ctaWork': 'Bekijk mijn werk',
    'hero.ctaContact': 'Stuur een bericht',
    'hero.scroll': 'scroll ↓',
    'about.title': 'Over mij',
    'about.lead': 'Ik ben een full stack developer die het liefst de hele stack in eigen hand heeft: datamodel, API, UI en deployment.',
    'about.p1': 'Overdag werk ik aan een multi-tenant platform voor expediteurs bij The Freight Hero: offertes, tarieven, de levenscyclus van zendingen en de interne tooling die alles draaiend houdt. Type-safe vanaf de database: Prisma, tRPC en Angular.',
    'about.p2': 'Buiten werktijd bouw en onderhoud ik websites voor lokale ondernemers in Nederland. En zo nu en dan verlies ik een avond aan algoritmes of retro-computers.',
    'work.title': 'Uitgelicht werk',
    'work.tfh.tag': 'Freight tech · SaaS',
    'work.tfh.text': 'Multi-tenant platform voor expediteurs: direct offertes rekenen, een tariefmotor met ruim 100 kostensoorten, zendingsbeheer en Nederlandse btw-logica. Vervangt de spreadsheets waar de meeste expediteurs nog in werken.',
    'work.ticket.tag': 'Interne tooling',
    'work.ticket.title': 'Multi-tenant ticketsysteem',
    'work.ticket.text': 'Intern support- en ticketsysteem in het platform, met strikte scheiding per tenant: elke query, route en view ziet alleen de eigen klant. Support lost meldingen op zonder de app uit te hoeven.',
    'work.prim.tag': 'Klantwerk',
    'work.prim.text': 'Website voor een Nederlands autobedrijf. Gebouwd, opgeleverd en in onderhoud, zodat de eigenaar er zelf niet naar om hoeft te kijken.',
    'work.promo.tag': 'Eigen bedrijf',
    'work.promo.text': 'Websites voor ondernemers en clubs in Twente, op abonnement: één vast bedrag per maand en wij houden de site in de lucht. Uurtje-factuurtje doen we niet.',
    'skills.title': 'Skills & stack',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.data': 'Data & infra',
    'skills.focus': 'Focus',
    'skills.focus1': 'Multi-tenant SaaS',
    'skills.focus2': "Type-safe API's",
    'skills.focus3': 'Prijs- en tariefengines',
    'skills.focus4': 'Performance',
    'contact.title': 'Contact',
    'contact.lead': 'Een project, een vacature, of gewoon zin om over code te praten? Mail me.',
    'footer.note': 'Met de hand gecodeerd. Geen framework aan te pas gekomen.',
  },

  en: {
    'meta.title': 'Nikita Skliarov-Napriahlo · Full Stack Developer',
    'meta.description': 'Portfolio of Nikita Skliarov-Napriahlo, full stack developer at The Freight Hero B.V. Multi-tenant SaaS, freight tech and web projects.',
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
    'about.p2': 'Outside work I build and maintain websites for local businesses in the Netherlands. Every so often I lose an evening to algorithms or retro computing.',
    'work.title': 'Selected work',
    'work.tfh.tag': 'Freight tech · SaaS',
    'work.tfh.text': 'Multi-tenant freight forwarding platform: instant quoting, a tariff engine with over 100 charge types, shipment lifecycle management and Dutch VAT logic. It replaces the spreadsheets most forwarders still run on.',
    'work.ticket.tag': 'Internal tooling',
    'work.ticket.title': 'Multi-tenant Ticket System',
    'work.ticket.text': 'Internal support and ticketing system built into the platform, with strict per-tenant isolation: every query, route and view sees its own customer only. Ops resolves issues without leaving the app.',
    'work.prim.tag': 'Client work',
    'work.prim.text': 'Website for a Dutch automotive business. Built, delivered and maintained, so the owner never has to think about it.',
    'work.promo.tag': 'Side business',
    'work.promo.text': 'Websites for entrepreneurs and clubs in Twente, on a subscription: one fixed monthly price and we keep the site running. No hourly billing.',
    'skills.title': 'Skills & stack',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.data': 'Data & infra',
    'skills.focus': 'Focus',
    'skills.focus1': 'Multi-tenant SaaS',
    'skills.focus2': 'Type-safe APIs',
    'skills.focus3': 'Pricing and tariff engines',
    'skills.focus4': 'Performance',
    'contact.title': 'Contact',
    'contact.lead': 'A project, a role, or just in the mood to talk code? Send me a mail.',
    'footer.note': 'Hand-coded. No frameworks harmed.',
  },

  uk: {
    'meta.title': 'Nikita Skliarov-Napriahlo · Full stack розробник',
    'meta.description': 'Портфоліо Nikita Skliarov-Napriahlo, full stack розробника в The Freight Hero B.V. Multi-tenant SaaS, freight-tech і вебпроєкти.',
    'nav.about': 'Про мене',
    'nav.work': 'Роботи',
    'nav.skills': 'Навички',
    'nav.contact': 'Контакти',
    'hero.kicker': 'Full stack розробник · Нідерланди',
    'hero.sub': 'Я створюю multi-tenant SaaS-платформи, від схеми бази даних до останнього пікселя. Зараз працюю над freight-tech у <a href="https://thefreighthero.com" target="_blank" rel="noopener">The&nbsp;Freight&nbsp;Hero&nbsp;B.V.</a>',
    'hero.ctaWork': 'Мої роботи',
    'hero.ctaContact': 'Написати мені',
    'hero.scroll': 'гортай ↓',
    'about.title': 'Про мене',
    'about.lead': 'Я full stack розробник, якому подобається тримати весь стек у своїх руках: модель даних, API, інтерфейс і деплой.',
    'about.p1': 'Вдень я працюю над multi-tenant платформою для експедиторів у The Freight Hero: розрахунок котирувань, тарифи, життєвий цикл відправлень і внутрішні інструменти, що тримають усе на ходу. Типобезпечно від бази даних і вище: Prisma, tRPC та Angular.',
    'about.p2': 'Поза роботою я роблю й підтримую сайти для місцевого бізнесу в Нідерландах. Час від часу залипаю на алгоритми чи ретро-компʼютери.',
    'work.title': 'Вибрані роботи',
    'work.tfh.tag': 'Freight tech · SaaS',
    'work.tfh.text': 'Multi-tenant платформа для експедиторів: миттєві котирування, тарифний движок із понад 100 типами витрат, керування життєвим циклом відправлень і нідерландська логіка ПДВ. Замінює таблиці, в яких досі працює більшість експедиторів.',
    'work.ticket.tag': 'Внутрішні інструменти',
    'work.ticket.title': 'Multi-tenant система тикетів',
    'work.ticket.text': 'Внутрішня система підтримки й тикетів усередині платформи, з жорсткою ізоляцією тенантів: кожен запит, маршрут і екран бачать лише свого клієнта. Підтримка закриває звернення, не виходячи із застосунку.',
    'work.prim.tag': 'Робота для клієнта',
    'work.prim.text': 'Сайт для нідерландського автобізнесу. Зробив, здав і підтримую, щоб власнику не довелося про нього думати.',
    'work.promo.tag': 'Власна справа',
    'work.promo.text': 'Сайти для підприємців і клубів у Твенте за підпискою: фіксована сума на місяць, і ми тримаємо сайт у робочому стані. Погодинних рахунків не виставляємо.',
    'skills.title': 'Навички та стек',
    'skills.frontend': 'Фронтенд',
    'skills.backend': 'Бекенд',
    'skills.data': 'Дані та інфраструктура',
    'skills.focus': 'Фокус',
    'skills.focus1': 'Multi-tenant SaaS',
    'skills.focus2': 'Типобезпечні API',
    'skills.focus3': 'Цінові й тарифні движки',
    'skills.focus4': 'Продуктивність',
    'contact.title': 'Контакти',
    'contact.lead': 'Проєкт, вакансія чи просто бажання поговорити про код? Напишіть мені.',
    'footer.note': 'Написано руками. Жоден фреймворк не постраждав.',
  },

  ru: {
    'meta.title': 'Nikita Skliarov-Napriahlo · Full stack разработчик',
    'meta.description': 'Портфолио Nikita Skliarov-Napriahlo, full stack разработчика в The Freight Hero B.V. Multi-tenant SaaS, freight-tech и веб-проекты.',
    'nav.about': 'Обо мне',
    'nav.work': 'Работы',
    'nav.skills': 'Навыки',
    'nav.contact': 'Контакты',
    'hero.kicker': 'Full stack разработчик · Нидерланды',
    'hero.sub': 'Я делаю multi-tenant SaaS-платформы, от схемы базы данных до последнего пикселя. Сейчас работаю над freight-tech в <a href="https://thefreighthero.com" target="_blank" rel="noopener">The&nbsp;Freight&nbsp;Hero&nbsp;B.V.</a>',
    'hero.ctaWork': 'Мои работы',
    'hero.ctaContact': 'Написать мне',
    'hero.scroll': 'листай ↓',
    'about.title': 'Обо мне',
    'about.lead': 'Я full stack разработчик, которому нравится держать весь стек в своих руках: модель данных, API, интерфейс и деплой.',
    'about.p1': 'Днём я работаю над multi-tenant платформой для экспедиторов в The Freight Hero: расчёт котировок, тарифы, жизненный цикл отправлений и внутренние инструменты, которые держат всё на ходу. Типобезопасно от базы данных и выше: Prisma, tRPC и Angular.',
    'about.p2': 'Вне работы я делаю и поддерживаю сайты для местного бизнеса в Нидерландах. Иногда залипаю на алгоритмы или ретро-компьютеры.',
    'work.title': 'Избранные работы',
    'work.tfh.tag': 'Freight tech · SaaS',
    'work.tfh.text': 'Multi-tenant платформа для экспедиторов: мгновенные котировки, тарифный движок с более чем 100 типами расходов, управление жизненным циклом отправлений и нидерландская логика НДС. Заменяет таблицы, в которых до сих пор работает большинство экспедиторов.',
    'work.ticket.tag': 'Внутренние инструменты',
    'work.ticket.title': 'Multi-tenant система тикетов',
    'work.ticket.text': 'Внутренняя система поддержки и тикетов внутри платформы, с жёсткой изоляцией тенантов: каждый запрос, роут и экран видят только своего клиента. Поддержка закрывает обращения, не выходя из приложения.',
    'work.prim.tag': 'Работа для клиента',
    'work.prim.text': 'Сайт для нидерландского автобизнеса. Сделал, сдал и поддерживаю, чтобы владельцу не приходилось о нём думать.',
    'work.promo.tag': 'Своё дело',
    'work.promo.text': 'Сайты для предпринимателей и клубов в Твенте по подписке: фиксированная сумма в месяц, и мы держим сайт на ходу. Почасовых счетов не выставляем.',
    'skills.title': 'Навыки и стек',
    'skills.frontend': 'Фронтенд',
    'skills.backend': 'Бэкенд',
    'skills.data': 'Данные и инфраструктура',
    'skills.focus': 'Фокус',
    'skills.focus1': 'Multi-tenant SaaS',
    'skills.focus2': 'Типобезопасные API',
    'skills.focus3': 'Ценовые и тарифные движки',
    'skills.focus4': 'Производительность',
    'contact.title': 'Контакты',
    'contact.lead': 'Проект, вакансия или просто желание поговорить о коде? Напишите мне.',
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

function applyLang(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.title = dict['meta.title'];
  document.querySelector('meta[name="description"]').setAttribute('content', dict['meta.description']);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.getAttribute('data-i18n')];
    if (value === undefined) return;
    if (el.hasAttribute('data-i18n-html')) el.innerHTML = value;
    else el.textContent = value;
  });

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
}

function setLang(lang) {
  storageSet(LANG_STORAGE_KEY, lang);
  applyLang(lang);
}

const storedLang = storageGet(LANG_STORAGE_KEY);
applyLang(SUPPORTED_LANGS.includes(storedLang) ? storedLang : 'nl');

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
if (browserIsEnglish && !storedLang && !storageGet(TIP_STORAGE_KEY)) {
  tip.hidden = false;
}

document.getElementById('langTipSwitch').addEventListener('click', () => {
  setLang('en');
  hideTip();
});
document.getElementById('langTipClose').addEventListener('click', hideTip);
