// Client-side i18n: Dutch is the baseline in index.html, the rest is swapped in here.
// Keys marked data-i18n-html in the HTML may contain markup.
const translations = {
  nl: {
    'meta.title': 'Nikita Skliarov-Napriahlo · Websites op abonnement · Full stack developer',
    'meta.description': 'Websites op abonnement voor ondernemers en clubs in Twente, via Promobo. Plus het full stack werk van Nikita Skliarov-Napriahlo: The Freight Hero, Goonys en eigen projecten. Alles op deze pagina staat live.',
    'a11y.skip': 'Direct naar de inhoud',
    'nav.offer': 'Aanbod',
    'nav.work': 'Werk',
    'nav.projects': 'Projecten',
    'nav.contact': 'Contact',
    'nav.cta': 'Plan een kennismaking',
    'nav.ariaMain': 'Hoofdnavigatie',
    'live.outro': 'Zoiets ook nodig?',
    'live.outroLink': 'Zo werkt het abonnement.',
    'work.dossierWord': 'dossier',
    'contact.subject': 'Website-aanvraag via nikita-skliarov-napriahlo.nl',
    'hero.byline': 'full stack developer · Twente',
    'hero.title1': 'Een website die af is,',
    'hero.title2': 'live staat en gewoon blijft draaien.',
    'hero.sub': 'Overdag bouw ik logistieksoftware bij The Freight Hero. Daarnaast run ik Promobo, samen met Jordi Raanhuis: wij bouwen en onderhouden websites voor ondernemers en clubs in Twente, voor een vast bedrag per maand. Geen uurtje-factuurtje.',
    'hero.ctaPrimary': 'Plan een kennismaking',
    'hero.ctaSecondary': 'Bekijk wat er live staat',
    'hero.proof': 'Alles op deze pagina staat live. Klik maar.',
    'live.title': 'status',
    'live.checked': 'voor het laatst gecheckt op',
    'live.d1': 'websites op abonnement, ons bureau',
    'live.d2': 'praktijk voor relatie- en gezinstherapie, Hengelo',
    'live.d3': 'autobedrijf',
    'live.d4': 'ambulante zorgaanbieder, Hengelo',
    'live.d6': 'het team en de tooling achter ons klantwerk',
    'live.d9': 'reviewfunnel voor The Freight Hero',
    'offer.kicker': 'websites op abonnement',
    'offer.title': 'Jouw site geregeld, voor een vast bedrag per maand.',
    'offer.p1': 'Een goede website is nooit af. Teksten veranderen, techniek veroudert, en de bouwer van toen neemt niet meer op. Daarom werken wij niet met losse facturen maar met een abonnement: wij bouwen je site, zetten hem live en houden hem daarna gewoon draaiend.',
    'offer.p2': 'Promobo run ik samen met Jordi Raanhuis, vanuit Twente, met het team en de tooling van Goonys. Wat het precies kost hangt af van wat je nodig hebt; dat hoor je in het eerste gesprek, en dat gesprek heb je binnen een werkdag.',
    'offer.s1t': 'Vertel wat je nodig hebt',
    'offer.s1p': 'Eén mail of belletje is genoeg. Geen offertecircus.',
    'offer.s2t': 'Wij bouwen en zetten live',
    'offer.s2p': 'Je ziet tussenversies, dus geen verrassing bij oplevering.',
    'offer.s3t': 'En daarna blijft het draaien',
    'offer.s3p': 'Updates, aanpassingen en hosting zitten in het abonnement.',
    'offer.boxTitle': 'Wat zit erin',
    'offer.b1': 'Ontwerp en bouw',
    'offer.b2': 'Hosting en eigen domein',
    'offer.b3': 'Aanpassingen en onderhoud',
    'offer.b4': 'Support in vier talen',
    'offer.b5': 'Geen uurtje-factuurtje',
    'offer.cta': 'Vraag vrijblijvend een prijs',
    'offer.more': 'meer op promobo.nl',
    'work.title': 'Het zware werk',
    'work.meta.role': 'rol',
    'work.meta.scale': 'schaal',
    'work.tfh.text': 'Multi-tenant platform voor expediteurs: direct offertes rekenen, een tariefmotor met tientallen kostensoorten, zendingsbeheer en Nederlandse btw-logica. Vervangt de spreadsheets waar de meeste expediteurs nog in werken.',
    'work.tfh.role': 'full stack developer',
    'work.tfh.scale': "78 tRPC-routers, 23 databaseschema's",
    'work.tfh.status': 'in productie',
    'work.tfh.url': 'https://thefreighthero.nl',
    'work.tfh.link': 'thefreighthero.nl',
    'work.ticket.text': 'Multi-tenant ticketsysteem: elke query, route en view ziet alleen de eigen klant. De browserextensie stuurt bij een melding automatisch een screenshot, DOM-snapshot en consolelogs mee; netwerkdata alleen als de melder dat zelf aanzet. Draait als eerste bij The Freight Hero, via enterprise force-install.',
    'work.ticket.role': 'bedenker en bouwer',
    'work.ticket.status': 'dagelijks in gebruik',
    'work.outro': 'Zulke systemen bouw ik overdag. Daarbij vergeleken is jouw website bijna ontspanning.',
    'work.outroLink': 'Plan een kennismaking.',
    'index.title': 'Projectindex',
    'index.thProject': 'Project',
    'index.thWhat': 'Wat',
    'index.moni': 'Relatie- en gezinstherapie, Hengelo. Monique past haar teksten zelf aan in Sanity.',
    'index.prim': 'Autobedrijf. Gebouwd, opgeleverd en in onderhoud; de eigenaar hoeft er niet naar om te kijken.',
    'index.care': 'Onepager voor een ambulante zorgaanbieder in Hengelo.',
    'index.dtk': '3D-productconfigurator voor een tassenwinkel.',
    'index.wip': 'in ontwikkeling',
    'index.fin': 'Budget-app die één vraag beantwoordt: hoeveel kan ik vandaag uitgeven?',
    'index.review': 'Klanten in dertig seconden naar een geplaatste review, zonder backend.',
    'index.noBuild': 'geen build',
    'index.analytics': 'Cookieloze multi-tenant analytics voor alle Goonys-sites.',
    'index.private': 'privé',
    'index.jarvis': 'Telegram-assistent die vrije tekst omzet in acties en herinneringen.',
    'index.story': 'Vertakkende verhalen op Telegram, met betalingen via Telegram Stars.',
    'index.cf': 'DNS-migraties naar Cloudflare: audit, plan, apply, verify.',
    'index.thisName': 'Deze site',
    'index.this': 'Vier talen, strenge CSP, cookieloos, met de hand geschreven.',
    'index.source': 'broncode',
    'index.outro': 'Staat jouw site hier volgend jaar tussen?',
    'index.outroLink': 'Een gesprek kost niets.',
    'claims.title': 'Waarom dit klopt',
    'claims.proofLabel': 'bewijs:',
    'claims.c1': 'Ik bouw de hele stack zelf, van databaseschema tot laatste pixel.',
    'claims.p1': 'dossier 01 hierboven',
    'claims.c2': 'Wat wij opleveren blijft draaien.',
    'claims.p2': 'de statusregels bovenaan, allemaal live',
    'claims.c3': 'Deze site is met de hand geschreven: HTML, CSS en JavaScript, geen build-stap.',
    'claims.p3': 'de broncode staat op GitHub',
    'claims.c4': 'Je kunt ons bereiken in het Nederlands, Engels, Oekraïens en Russisch.',
    'claims.p4': 'de taalknoppen rechtsboven doen het echt',
    'claims.c5': 'Type-safe van database tot formulier.',
    'claims.p5': 'dossier 01 en 02',
    'letter.p1': "Ik ben Nikita. Overdag werk ik als full stack developer bij The Freight Hero B.V. aan een platform voor expediteurs. 's Avonds bouw ik met Jordi Raanhuis onder de naam Promobo websites voor ondernemers hier in Twente.",
    'letter.p2': "Van oorsprong kom ik uit Oekraïne; inmiddels ben ik hier thuis. En er ligt altijd wel een eigen project op tafel: een budget-app, of de Telegram-bot die m'n vrouw elke ochtend een compliment stuurt. Bouwen stopt bij mij niet om vijf uur.",
    'contact.title': 'Contact',
    'contact.clientTitle': 'Een website nodig?',
    'contact.n1': 'Je mailt met Nikita of Jordi zelf, niet met een studio.',
    'contact.n2': 'Binnen één werkdag antwoord.',
    'contact.n3': 'Liever bellen? Zet je nummer in de mail, dan bellen wij terug.',
    'contact.clientCta': 'Mail',
    'contact.directTitle': 'Iets technisch, een vacature of gewoon hallo?',
    'contact.directLead': 'Mail me direct, ik schrijf altijd terug.',
    'footer.note': 'Met de hand geschreven in HTML, CSS en JS. Geen build-stap.',
    'footer.source': 'Bekijk gerust de broncode.',
  },

  en: {
    'meta.title': 'Nikita Skliarov-Napriahlo · Subscription websites · Full stack developer',
    'meta.description': 'Full stack developer at The Freight Hero B.V. and co-founder of Promobo: subscription websites for businesses and clubs in Twente, the Netherlands. Everything on this page is live.',
    'a11y.skip': 'Skip to content',
    'nav.offer': 'Offer',
    'nav.work': 'Work',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cta': 'Book an intro call',
    'nav.ariaMain': 'Main navigation',
    'live.outro': 'Need something like this?',
    'live.outroLink': "Here's how the subscription works.",
    'work.dossierWord': 'dossier',
    'contact.subject': 'Website inquiry via nikita-skliarov-napriahlo.nl',
    'hero.byline': 'full stack developer · Twente, NL',
    'hero.title1': 'A website that gets finished,',
    'hero.title2': 'goes live and just keeps running.',
    'hero.sub': "By day I build logistics software at The Freight Hero. Next to that I run Promobo with Jordi Raanhuis: we build and maintain websites for businesses and clubs in Twente, for a fixed monthly price. No hourly billing.",
    'hero.ctaPrimary': 'Book an intro call',
    'hero.ctaSecondary': "See what's live",
    'hero.proof': 'Everything on this page is live. Go ahead, click.',
    'live.title': 'status',
    'live.checked': 'last checked on',
    'live.d1': 'subscription websites, our agency',
    'live.d2': 'couples and family therapy practice, Hengelo',
    'live.d3': 'car dealership',
    'live.d4': 'outpatient care provider, Hengelo',
    'live.d6': 'the team and tooling behind our client work',
    'live.d9': 'review funnel for The Freight Hero',
    'offer.kicker': 'subscription websites',
    'offer.title': 'Your site sorted, for a fixed monthly price.',
    'offer.p1': "A good website is never finished. Copy changes, tech ages, and the person who built it stops picking up the phone. That's why we don't send one-off invoices — we work on a subscription: we build your site, put it live and then keep it running.",
    'offer.p2': "I run Promobo with Jordi Raanhuis from Twente, built on the Goonys team and tooling. What it costs depends on what you need; we'll tell you in the first call, and that call happens within a working day.",
    'offer.s1t': 'Tell us what you need',
    'offer.s1p': 'One email or a call is enough. No endless quote rounds.',
    'offer.s2t': 'We build and go live',
    'offer.s2p': 'You see versions along the way, so no surprises when we hand it over.',
    'offer.s3t': 'And then it keeps running',
    'offer.s3p': 'Updates, changes and hosting are part of the subscription.',
    'offer.boxTitle': "What's included",
    'offer.b1': 'Design and build',
    'offer.b2': 'Hosting and your own domain',
    'offer.b3': 'Changes and maintenance',
    'offer.b4': 'Support in four languages',
    'offer.b5': 'No hourly billing',
    'offer.cta': 'Ask for a price, no strings',
    'offer.more': 'more at promobo.nl',
    'work.title': 'The heavy lifting',
    'work.meta.role': 'role',
    'work.meta.scale': 'scale',
    'work.tfh.text': 'Multi-tenant platform for freight forwarders: instant quoting, a tariff engine with dozens of charge types, shipment management and Dutch VAT logic. It replaces the spreadsheets most forwarders still run on.',
    'work.tfh.role': 'full stack developer',
    'work.tfh.scale': '78 tRPC routers, 23 database schemas',
    'work.tfh.status': 'in production',
    'work.tfh.url': 'https://thefreighthero.com',
    'work.tfh.link': 'thefreighthero.com',
    'work.ticket.text': "Multi-tenant ticket system: every query, route and view sees its own customer only. The browser extension automatically attaches a screenshot, DOM snapshot and console logs to a report; network data only when the reporter turns it on. The Freight Hero is the first to run it, rolled out via enterprise force-install.",
    'work.ticket.role': 'designer and builder',
    'work.ticket.status': 'in daily use',
    'work.outro': 'I build systems like these during the day. Compared to that, your website is almost a breather.',
    'work.outroLink': 'Book an intro call.',
    'index.title': 'Project index',
    'index.thProject': 'Project',
    'index.thWhat': 'What',
    'index.moni': 'Couples and family therapy, Hengelo. Monique edits her own copy in Sanity.',
    'index.prim': "Car dealership. Built, delivered and maintained; the owner never has to think about it.",
    'index.care': 'One-pager for an outpatient care provider in Hengelo.',
    'index.dtk': '3D product configurator for a bag store.',
    'index.wip': 'in development',
    'index.fin': 'Budgeting app that answers one question: how much can I spend today?',
    'index.review': 'Gets customers to a posted review in thirty seconds, with no backend.',
    'index.noBuild': 'no build',
    'index.analytics': 'Cookieless multi-tenant analytics for all Goonys sites.',
    'index.private': 'private',
    'index.jarvis': 'Telegram assistant that turns free text into actions and reminders.',
    'index.story': 'Branching stories on Telegram, with payments through Telegram Stars.',
    'index.cf': 'DNS migrations to Cloudflare: audit, plan, apply, verify.',
    'index.thisName': 'This site',
    'index.this': 'Four languages, strict CSP, cookieless, written by hand.',
    'index.source': 'source',
    'index.outro': 'Will your site be on this list next year?',
    'index.outroLink': 'A chat costs you nothing.',
    'claims.title': 'Why you can trust this',
    'claims.proofLabel': 'proof:',
    'claims.c1': 'I build the whole stack myself, from database schema to the last pixel.',
    'claims.p1': 'dossier 01 above',
    'claims.c2': 'What we deliver keeps running.',
    'claims.p2': 'the status lines at the top, all live',
    'claims.c3': 'This site is written by hand: HTML, CSS and JavaScript, no build step.',
    'claims.p3': 'the source code is on GitHub',
    'claims.c4': 'You can reach us in Dutch, English, Ukrainian and Russian.',
    'claims.p4': 'the language buttons at the top right actually work',
    'claims.c5': 'Type-safe from database to form.',
    'claims.p5': 'dossiers 01 and 02',
    'letter.p1': "I'm Nikita. By day I work as a full stack developer at The Freight Hero B.V., on a platform for freight forwarders. In the evenings I build websites with Jordi Raanhuis under the name Promobo, for businesses here in Twente.",
    'letter.p2': "I'm originally from Ukraine; by now this is home. And there's always a project of my own on the table: a budgeting app, or the Telegram bot that sends my wife a compliment every morning. Building doesn't stop at five for me.",
    'contact.title': 'Contact',
    'contact.clientTitle': 'Need a website?',
    'contact.n1': 'Your email goes straight to Nikita or Jordi, not into a queue.',
    'contact.n2': 'A reply within one working day.',
    'contact.n3': "Prefer a call? Put your number in your email and we'll ring you back.",
    'contact.clientCta': 'Email',
    'contact.directTitle': 'Something technical, a role, or just hello?',
    'contact.directLead': 'Email me directly, I always write back.',
    'footer.note': 'Written by hand in HTML, CSS and JS. No build step.',
    'footer.source': 'Feel free to read the source.',
  },

  uk: {
    'meta.title': 'Nikita Skliarov-Napriahlo · Сайти за підпискою · Full stack розробник',
    'meta.description': 'Full stack розробник у The Freight Hero B.V. і співзасновник Promobo: сайти за підпискою для підприємців і клубів у Твенте, Нідерланди. Все на цій сторінці працює наживо.',
    'a11y.skip': 'Перейти до вмісту',
    'nav.offer': 'Пропозиція',
    'nav.work': 'Роботи',
    'nav.projects': 'Проєкти',
    'nav.contact': 'Контакти',
    'nav.cta': 'Домовитись про знайомство',
    'nav.ariaMain': 'Головна навігація',
    'live.outro': 'Потрібно щось таке?',
    'live.outroLink': 'Ось як працює підписка.',
    'work.dossierWord': 'досьє',
    'contact.subject': 'Запит на сайт через nikita-skliarov-napriahlo.nl',
    'hero.byline': 'full stack розробник · Твенте, Нідерланди',
    'hero.title1': 'Сайт, який доведений до кінця,',
    'hero.title2': 'працює наживо і просто не ламається.',
    'hero.sub': 'Вдень я пишу логістичне програмне забезпечення у The Freight Hero. Крім того, ми з Йорді Ранхаусом ведемо Promobo: будуємо й підтримуємо сайти для підприємців і клубів у Твенте за фіксовану суму на місяць. Жодних погодинних рахунків.',
    'hero.ctaPrimary': 'Домовитись про знайомство',
    'hero.ctaSecondary': 'Подивитися, що працює',
    'hero.proof': 'Все на цій сторінці працює наживо. Клікайте.',
    'live.title': 'статус',
    'live.checked': 'востаннє перевірено',
    'live.d1': 'сайти за підпискою, наше бюро',
    'live.d2': 'практика парної та сімейної терапії, Хенгело',
    'live.d3': 'автосалон',
    'live.d4': 'служба амбулаторного догляду, Хенгело',
    'live.d6': 'команда та інструменти за нашими проєктами',
    'live.d9': 'лійка відгуків для The Freight Hero',
    'offer.kicker': 'сайти за підпискою',
    'offer.title': 'Ваш сайт під ключ, за фіксовану суму на місяць.',
    'offer.p1': 'Хороший сайт ніколи не буває готовим назавжди. Тексти змінюються, технології старіють, а той, хто його колись зробив, більше не бере слухавку. Тому ми працюємо не за окремими рахунками, а за підпискою: будуємо сайт, запускаємо і далі тримаємо його на ходу.',
    'offer.p2': 'Promobo ми з Йорді Ранхаусом ведемо з Твенте, силами команди й інструментів Goonys. Скільки це коштує, залежить від того, що вам потрібно; ви почуєте це в першій розмові, і ця розмова відбудеться протягом робочого дня.',
    'offer.s1t': 'Розкажіть, що вам потрібно',
    'offer.s1p': 'Досить одного листа чи дзвінка. Без цирку з комерційними пропозиціями.',
    'offer.s2t': 'Ми будуємо і запускаємо',
    'offer.s2p': 'Ви бачите проміжні версії, тож без сюрпризів наприкінці.',
    'offer.s3t': 'А далі все просто працює',
    'offer.s3p': 'Оновлення, правки та хостинг входять у підписку.',
    'offer.boxTitle': 'Що входить',
    'offer.b1': 'Дизайн і розробка',
    'offer.b2': 'Хостинг і власний домен',
    'offer.b3': 'Правки та підтримка',
    'offer.b4': 'Підтримка чотирма мовами',
    'offer.b5': 'Жодних погодинних рахунків',
    'offer.cta': 'Дізнатися ціну, без зобовʼязань',
    'offer.more': 'більше на promobo.nl',
    'work.title': 'Важка робота',
    'work.meta.role': 'роль',
    'work.meta.scale': 'масштаб',
    'work.tfh.text': 'Мультитенантна платформа для експедиторів: миттєві котирування, тарифний рушій із десятками типів витрат, керування відправленнями та нідерландська логіка ПДВ. Замінює таблиці, в яких досі працює більшість експедиторів.',
    'work.tfh.role': 'full stack розробник',
    'work.tfh.scale': '78 tRPC-роутерів, 23 схеми бази даних',
    'work.tfh.status': 'у продакшені',
    'work.tfh.url': 'https://thefreighthero.com',
    'work.tfh.link': 'thefreighthero.com',
    'work.ticket.text': 'Мультитенантна система тикетів: кожен запит, маршрут і екран бачать лише свого клієнта. Браузерне розширення автоматично додає до звернення скриншот, знімок DOM і логи консолі; мережеві дані — лише якщо користувач сам це увімкне. Першим її використовує The Freight Hero, через корпоративне встановлення.',
    'work.ticket.role': 'придумав і збудував',
    'work.ticket.status': 'у щоденному використанні',
    'work.outro': 'Такі системи я будую вдень. Ваш сайт поруч із цим — майже відпочинок.',
    'work.outroLink': 'Домовтесь про знайомство.',
    'index.title': 'Індекс проєктів',
    'index.thProject': 'Проєкт',
    'index.thWhat': 'Що',
    'index.moni': 'Парна та сімейна терапія, Хенгело. Моніка сама редагує тексти в Sanity.',
    'index.prim': 'Автосалон. Зробили, здали й підтримуємо; власнику не треба про нього думати.',
    'index.care': 'Односторінковий сайт для служби амбулаторного догляду в Хенгело.',
    'index.dtk': '3D-конфігуратор товару для магазину сумок.',
    'index.wip': 'у розробці',
    'index.fin': 'Бюджетний застосунок з однією відповіддю: скільки я можу витратити сьогодні?',
    'index.review': 'Веде клієнтів до опублікованого відгуку за тридцять секунд, без бекенду.',
    'index.noBuild': 'без збірки',
    'index.analytics': 'Аналітика без cookies, мультитенантна, для всіх сайтів Goonys.',
    'index.private': 'приватний',
    'index.jarvis': 'Telegram-асистент, що перетворює вільний текст на дії та нагадування.',
    'index.story': 'Розгалужені історії в Telegram, з оплатою через Telegram Stars.',
    'index.cf': 'Міграції DNS до Cloudflare: audit, plan, apply, verify.',
    'index.thisName': 'Цей сайт',
    'index.this': 'Чотири мови, суворий CSP, без cookies, написаний руками.',
    'index.source': 'код',
    'index.outro': 'Чи буде ваш сайт у цьому списку наступного року?',
    'index.outroLink': 'Розмова нічого не коштує.',
    'claims.title': 'Чому цьому можна вірити',
    'claims.proofLabel': 'доказ:',
    'claims.c1': 'Я будую весь стек сам, від схеми бази даних до останнього пікселя.',
    'claims.p1': 'досьє 01 вище',
    'claims.c2': 'Те, що ми здаємо, продовжує працювати.',
    'claims.p2': 'рядки статусу вгорі, всі наживо',
    'claims.c3': 'Цей сайт написаний руками: HTML, CSS і JavaScript, без збірки.',
    'claims.p3': 'вихідний код на GitHub',
    'claims.c4': 'З нами можна говорити нідерландською, англійською, українською та російською.',
    'claims.p4': 'кнопки мов угорі справді працюють',
    'claims.c5': 'Типобезпечно від бази даних до форми.',
    'claims.p5': 'досьє 01 і 02',
    'letter.p1': "Я Нікіта. Вдень працюю full stack розробником у The Freight Hero B.V., над платформою для експедиторів. Вечорами ми з Йорді Ранхаусом будуємо сайти під назвою Promobo, для підприємців тут, у Твенте.",
    'letter.p2': 'Родом я з України; тепер мій дім тут. І на столі завжди лежить якийсь власний проєкт: бюджетний застосунок або Telegram-бот, який щоранку надсилає моїй дружині комплімент. Будувати я о пʼятій не припиняю.',
    'contact.title': 'Контакти',
    'contact.clientTitle': 'Потрібен сайт?',
    'contact.n1': 'Ви пишете напряму Нікіті чи Йорді, а не студії.',
    'contact.n2': 'Відповідь протягом робочого дня.',
    'contact.n3': 'Зручніше телефоном? Залиште номер у листі, і ми передзвонимо.',
    'contact.clientCta': 'Написати на',
    'contact.directTitle': 'Щось технічне, вакансія чи просто привіт?',
    'contact.directLead': 'Пишіть мені напряму, я завжди відповідаю.',
    'footer.note': 'Написано руками: HTML, CSS і JS. Без збірки.',
    'footer.source': 'Зазирніть у вихідний код.',
  },

  ru: {
    'meta.title': 'Nikita Skliarov-Napriahlo · Сайты по подписке · Full stack разработчик',
    'meta.description': 'Full stack разработчик в The Freight Hero B.V. и сооснователь Promobo: сайты по подписке для предпринимателей и клубов в Твенте, Нидерланды. Всё на этой странице работает вживую.',
    'a11y.skip': 'Перейти к содержимому',
    'nav.offer': 'Предложение',
    'nav.work': 'Работы',
    'nav.projects': 'Проекты',
    'nav.contact': 'Контакты',
    'nav.cta': 'Договориться о знакомстве',
    'nav.ariaMain': 'Главная навигация',
    'live.outro': 'Нужно что-то такое?',
    'live.outroLink': 'Вот как работает подписка.',
    'work.dossierWord': 'досье',
    'contact.subject': 'Запрос на сайт через nikita-skliarov-napriahlo.nl',
    'hero.byline': 'full stack разработчик · Твенте, Нидерланды',
    'hero.title1': 'Сайт, который доведён до конца,',
    'hero.title2': 'работает вживую и просто не ломается.',
    'hero.sub': 'Днём я пишу логистическое программное обеспечение в The Freight Hero. Помимо этого мы с Йорди Ранхаусом ведём Promobo: строим и поддерживаем сайты для предпринимателей и клубов в Твенте за фиксированную сумму в месяц. Никаких почасовых счетов.',
    'hero.ctaPrimary': 'Договориться о знакомстве',
    'hero.ctaSecondary': 'Посмотреть, что работает',
    'hero.proof': 'Всё на этой странице работает вживую. Кликайте.',
    'live.title': 'статус',
    'live.checked': 'последняя проверка',
    'live.d1': 'сайты по подписке, наше бюро',
    'live.d2': 'практика парной и семейной терапии, Хенгело',
    'live.d3': 'автосалон',
    'live.d4': 'служба амбулаторного ухода, Хенгело',
    'live.d6': 'команда и инструменты за нашими проектами',
    'live.d9': 'воронка отзывов для The Freight Hero',
    'offer.kicker': 'сайты по подписке',
    'offer.title': 'Ваш сайт под ключ, за фиксированную сумму в месяц.',
    'offer.p1': 'Хороший сайт никогда не бывает готов насовсем. Тексты меняются, технологии стареют, а тот, кто его когда-то сделал, больше не берёт трубку. Поэтому мы работаем не по отдельным счетам, а по подписке: строим сайт, запускаем и дальше держим его на ходу.',
    'offer.p2': 'Promobo мы с Йорди Ранхаусом ведём из Твенте, силами команды и инструментов Goonys. Сколько это стоит, зависит от того, что вам нужно; вы услышите это в первом разговоре, и этот разговор состоится в течение рабочего дня.',
    'offer.s1t': 'Расскажите, что вам нужно',
    'offer.s1p': 'Достаточно одного письма или звонка. Без цирка с коммерческими предложениями.',
    'offer.s2t': 'Мы строим и запускаем',
    'offer.s2p': 'Вы видите промежуточные версии, так что без сюрпризов в конце.',
    'offer.s3t': 'А дальше всё просто работает',
    'offer.s3p': 'Обновления, правки и хостинг входят в подписку.',
    'offer.boxTitle': 'Что входит',
    'offer.b1': 'Дизайн и разработка',
    'offer.b2': 'Хостинг и собственный домен',
    'offer.b3': 'Правки и поддержка',
    'offer.b4': 'Поддержка на четырёх языках',
    'offer.b5': 'Никаких почасовых счетов',
    'offer.cta': 'Узнать цену, без обязательств',
    'offer.more': 'больше на promobo.nl',
    'work.title': 'Тяжёлая работа',
    'work.meta.role': 'роль',
    'work.meta.scale': 'масштаб',
    'work.tfh.text': 'Мультитенантная платформа для экспедиторов: мгновенные котировки, тарифный движок с десятками типов расходов, управление отправлениями и нидерландская логика НДС. Заменяет таблицы, в которых до сих пор работает большинство экспедиторов.',
    'work.tfh.role': 'full stack разработчик',
    'work.tfh.scale': '78 tRPC-роутеров, 23 схемы базы данных',
    'work.tfh.status': 'в продакшене',
    'work.tfh.url': 'https://thefreighthero.com',
    'work.tfh.link': 'thefreighthero.com',
    'work.ticket.text': 'Мультитенантная система тикетов: каждый запрос, роут и экран видят только своего клиента. Браузерное расширение автоматически прикладывает к обращению скриншот, снимок DOM и логи консоли; сетевые данные — только если пользователь сам это включит. Первым её использует The Freight Hero, через корпоративную установку.',
    'work.ticket.role': 'придумал и собрал',
    'work.ticket.status': 'в ежедневном использовании',
    'work.outro': 'Такие системы я строю днём. Ваш сайт рядом с этим — почти отдых.',
    'work.outroLink': 'Договоритесь о знакомстве.',
    'index.title': 'Индекс проектов',
    'index.thProject': 'Проект',
    'index.thWhat': 'Что',
    'index.moni': 'Парная и семейная терапия, Хенгело. Моника сама редактирует тексты в Sanity.',
    'index.prim': 'Автосалон. Сделали, сдали и поддерживаем; владельцу не нужно о нём думать.',
    'index.care': 'Одностраничный сайт для службы амбулаторного ухода в Хенгело.',
    'index.dtk': '3D-конфигуратор товара для магазина сумок.',
    'index.wip': 'в разработке',
    'index.fin': 'Бюджетное приложение с одним ответом: сколько я могу потратить сегодня?',
    'index.review': 'Приводит клиентов к опубликованному отзыву за тридцать секунд, без бэкенда.',
    'index.noBuild': 'без сборки',
    'index.analytics': 'Аналитика без cookies, мультитенантная, для всех сайтов Goonys.',
    'index.private': 'приватный',
    'index.jarvis': 'Telegram-ассистент, который превращает свободный текст в действия и напоминания.',
    'index.story': 'Ветвящиеся истории в Telegram, с оплатой через Telegram Stars.',
    'index.cf': 'Миграции DNS в Cloudflare: audit, plan, apply, verify.',
    'index.thisName': 'Этот сайт',
    'index.this': 'Четыре языка, строгий CSP, без cookies, написан руками.',
    'index.source': 'код',
    'index.outro': 'Будет ли ваш сайт в этом списке через год?',
    'index.outroLink': 'Разговор ничего не стоит.',
    'claims.title': 'Почему этому можно верить',
    'claims.proofLabel': 'доказательство:',
    'claims.c1': 'Я строю весь стек сам, от схемы базы данных до последнего пикселя.',
    'claims.p1': 'досье 01 выше',
    'claims.c2': 'То, что мы сдаём, продолжает работать.',
    'claims.p2': 'строки статуса наверху, все вживую',
    'claims.c3': 'Этот сайт написан руками: HTML, CSS и JavaScript, без сборки.',
    'claims.p3': 'исходный код на GitHub',
    'claims.c4': 'С нами можно говорить по-нидерландски, по-английски, по-украински и по-русски.',
    'claims.p4': 'кнопки языков наверху действительно работают',
    'claims.c5': 'Типобезопасно от базы данных до формы.',
    'claims.p5': 'досье 01 и 02',
    'letter.p1': 'Я Никита. Днём работаю full stack разработчиком в The Freight Hero B.V., над платформой для экспедиторов. Вечерами мы с Йорди Ранхаусом строим сайты под именем Promobo, для предпринимателей здесь, в Твенте.',
    'letter.p2': 'Родом я из Украины; теперь мой дом здесь. И на столе всегда лежит какой-то свой проект: бюджетное приложение или Telegram-бот, который каждое утро отправляет моей жене комплимент. Строить я в пять вечера не перестаю.',
    'contact.title': 'Контакты',
    'contact.clientTitle': 'Нужен сайт?',
    'contact.n1': 'Вы пишете напрямую Никите или Йорди, а не студии.',
    'contact.n2': 'Ответ в течение рабочего дня.',
    'contact.n3': 'Удобнее по телефону? Оставьте номер в письме, и мы перезвоним.',
    'contact.clientCta': 'Написать на',
    'contact.directTitle': 'Что-то техническое, вакансия или просто привет?',
    'contact.directLead': 'Пишите мне напрямую, я всегда отвечаю.',
    'footer.note': 'Написано руками: HTML, CSS и JS. Без сборки.',
    'footer.source': 'Загляните в исходный код.',
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

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const value = dict[el.getAttribute('data-i18n-aria')];
    if (value !== undefined) el.setAttribute('aria-label', value);
  });

  // The Freight Hero uses .nl for Dutch visitors and .com for the rest.
  const tfhLink = document.getElementById('tfhLink');
  tfhLink.href = dict['work.tfh.url'];
  tfhLink.textContent = dict['work.tfh.link'];

  // Translated subject line on the Promobo mail button (Dutch is the no-JS baseline).
  const promoboMail = document.getElementById('promoboMail');
  promoboMail.href = 'mailto:info@promobo.nl?subject=' + encodeURIComponent(dict['contact.subject']);

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
}

function setLang(lang) {
  storageSet(LANG_STORAGE_KEY, lang);
  applyLang(lang);
  // Keep the address bar in sync so the shown URL matches the sitemap/hreflang URLs.
  try {
    const url = (lang === 'nl' ? location.pathname : location.pathname + '?lang=' + lang) + location.hash;
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
