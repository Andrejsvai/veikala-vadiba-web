const STORAGE_KEY = 'vv-landing-locale'

const FEATURES = [
  'warehouses',
  'sold',
  'receipts',
  'orders',
  'daily',
  'pricing',
  'acl',
  'invoices',
]

const STRINGS = {
  lv: {
    tagline: 'Veikalu un noliktavu vadība',
    heroSupport:
      'Viena sistēma atlikumiem, saņemšanai, pasūtījumiem un dienas atskaitei — vairākiem veikaliem Latvijā.',
    cta: 'Coming soon',
    featuresTitle: 'Kas ir iekšā',
    featuresSupport:
      'Ikdienas darbs uz grīdas: no piegādes līdz Z-aizvēršanai, bez smaguma.',
    features: {
      warehouses: {
        title: 'Vairākas noliktavas',
        body: 'Katram veikalam savi atlikumi, dokumenti, klienti un atskaites; preču kodi kopīgi visai sistēmai.',
      },
      sold: {
        title: 'Nopārdotās preces',
        body: 'Dienas pārdošanu ieraksti sākumlapā, ieliec Z-atskaitē un pēc vajadzības pasūti ar vienu plūsmu.',
      },
      receipts: {
        title: 'Saņemšanas pavadzīmes',
        body: 'Importē piegādātāja PDF vai Excel, labo rindas, aprēķini cenas un pievieno noliktavai.',
      },
      orders: {
        title: 'Pasūtāmās preces',
        body: 'Saraksts, ko pasūtīt — manuāli vai no nopārdotajām / beigušā atlikuma — ar kategorijām un statusiem.',
      },
      daily: {
        title: 'Dienas atskaite un Z',
        body: 'Skaidra, karte, līzings un pavadzīmes; kategoriju summas un skaidra dienas noslēgšana.',
      },
      pricing: {
        title: 'Cenošana un akcijas',
        body: '«Nav sacenots» rinda, sacenots ķeksīši, akcijas cena un drukas lapa etiķetēm.',
      },
      acl: {
        title: 'Pieejas pa veikalu',
        body: 'Katram lietotājam lasīt / rakstīt tiesības pa veikalu un moduli; administrators — pilna pieeja.',
      },
      invoices: {
        title: 'Pavadzīmes klientiem',
        body: 'Izrakstīšana, PDF un Excel izkārtojums, PVN un sasaiste ar dienas atskaiti.',
      },
    },
    audienceTitle: 'Kam paredzēts',
    audienceBody:
      'Mazumtirdzniecībai Latvijā ar vienu vai vairākiem veikaliem — komandām, kurām vajag skaidru noliktavas, pārdošanas un dienas aizvēršanas ritmu bez grāmatvedības sistēmas smaguma.',
    footerNote: 'Veikala Vadība — veikalu un noliktavu vadība.',
    footerCta: 'Coming soon',
  },
  en: {
    tagline: 'Shop and warehouse management',
    heroSupport:
      'One system for stock, goods-in, reorders, and the daily close — built for multi-shop retail in Latvia.',
    cta: 'Coming soon',
    featuresTitle: 'What is inside',
    featuresSupport:
      'Floor-ready workflows: from supplier delivery to Z-close, without the bloat.',
    features: {
      warehouses: {
        title: 'Multiple warehouses',
        body: 'Each shop keeps its own stock, documents, clients, and reports; product codes stay shared across the system.',
      },
      sold: {
        title: 'Sold items',
        body: "Log the day's sales on the home screen, drop them into the Z report, and reorder in one flow when needed.",
      },
      receipts: {
        title: 'Goods-in receipts',
        body: 'Import a supplier PDF or Excel, fix lines, price them, and post into warehouse stock.',
      },
      orders: {
        title: 'Items to order',
        body: 'A list of what to reorder — manual or from sold / out-of-stock — with categories and statuses.',
      },
      daily: {
        title: 'Daily report and Z-close',
        body: 'Cash, card, leasing, and invoices; category totals and a clear end-of-day close.',
      },
      pricing: {
        title: 'Pricing and promos',
        body: 'Unpriced rows, priced checkmarks, promo prices, and a print sheet for shelf labels.',
      },
      acl: {
        title: 'Per-shop access',
        body: 'Read / write rights per shop and module for every user; admins get full access.',
      },
      invoices: {
        title: 'Customer invoices',
        body: 'Issue invoices with PDF and Excel layouts, VAT, and a link into the daily report.',
      },
    },
    audienceTitle: 'Who it is for',
    audienceBody:
      'Latvian retail with one or several shops — teams that need a clear rhythm for stock, sales, and the daily close without the weight of a full accounting suite.',
    footerNote: 'Veikala Vadība — shop and warehouse management.',
    footerCta: 'Coming soon',
  },
}

function loadLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'lv') return stored
  } catch (_) {
    /* ignore */
  }
  return 'lv'
}

function saveLocale(locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch (_) {
    /* ignore */
  }
}

function render(locale) {
  const t = STRINGS[locale]
  document.documentElement.lang = locale

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    if (key && t[key] != null) el.textContent = t[key]
  })

  document.querySelectorAll('.lang button').forEach((btn) => {
    const code = btn.getAttribute('data-lang')
    btn.setAttribute('aria-pressed', code === locale ? 'true' : 'false')
  })

  const root = document.getElementById('features')
  root.innerHTML = FEATURES.map((key, index) => {
    const f = t.features[key]
    const num = String(index + 1).padStart(2, '0')
    return (
      '<article>' +
      '<span class="num">' +
      num +
      '</span>' +
      '<h3>' +
      f.title +
      '</h3>' +
      '<p>' +
      f.body +
      '</p>' +
      '</article>'
    )
  }).join('')
}

document.querySelectorAll('.lang button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const locale = btn.getAttribute('data-lang')
    if (locale !== 'en' && locale !== 'lv') return
    saveLocale(locale)
    render(locale)
  })
})

render(loadLocale())
