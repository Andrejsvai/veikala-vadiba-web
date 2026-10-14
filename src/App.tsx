import { useEffect, useState } from 'react'
import {
  FEATURE_ORDER,
  loadLocale,
  saveLocale,
  STRINGS,
  type Locale,
} from './i18n'

function App() {
  const [locale, setLocale] = useState<Locale>(() => loadLocale())
  const t = STRINGS[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    saveLocale(locale)
  }, [locale])

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-end px-5 py-5 sm:px-8">
          <div
            className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/20 p-1 backdrop-blur-md"
            role="group"
            aria-label={t.langLabel}
          >
            {(['lv', 'en'] as const).map((code) => {
              const active = locale === code
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLocale(code)}
                  aria-pressed={active}
                  className={[
                    'rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase transition',
                    active
                      ? 'bg-white text-[var(--ink-soft)] shadow-sm'
                      : 'text-white/75 hover:text-white',
                  ].join(' ')}
                >
                  {code}
                </button>
              )
            })}
          </div>
        </div>
      </header>

      <section className="hero-atmosphere relative min-h-[100svh] overflow-hidden text-[var(--cream)]">
        <div className="hero-grain pointer-events-none absolute inset-0 opacity-70" />
        <div className="blob pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[rgba(214,236,228,0.12)] blur-3xl" />
        <div className="blob blob-delayed pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-[rgba(217,119,6,0.16)] blur-3xl" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
          <p className="rise font-display text-sm font-semibold tracking-[0.22em] text-[rgba(243,247,244,0.72)] uppercase">
            Latvia · retail ops
          </p>
          <h1 className="rise rise-2 font-display mt-5 max-w-4xl text-5xl leading-[0.95] font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl">
            Veikala Vadība
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl text-xl font-medium text-[rgba(243,247,244,0.92)] sm:text-2xl">
            {t.tagline}
          </p>
          <p className="rise rise-4 mt-4 max-w-xl text-base leading-relaxed text-[rgba(215,235,228,0.78)] sm:text-lg">
            {t.heroSupport}
          </p>
          <div className="rise rise-4 mt-10">
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="cta-sheen cursor-not-allowed rounded-md px-7 py-3.5 text-sm font-bold tracking-wide text-[var(--ink)] uppercase opacity-95 shadow-[0_12px_40px_rgba(217,119,6,0.28)]"
            >
              {t.cta}
            </button>
          </div>
        </div>
      </section>

      <section className="relative border-t border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
              {t.featuresTitle}
            </h2>
            <p className="mt-3 text-lg text-[var(--muted)]">{t.featuresSupport}</p>
          </div>

          <div className="feature-grid mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURE_ORDER.map((key, index) => {
              const feature = t.features[key]
              return (
                <article key={key} className="border-t border-[var(--line)] pt-5">
                  <p className="font-display text-xs font-semibold tracking-[0.18em] text-[var(--moss)] uppercase">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-[var(--ink)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--muted)]">
                    {feature.body}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[var(--line)] bg-[linear-gradient(180deg,#e8f2ee_0%,#f3f7f4_100%)]">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_right,rgba(31,107,92,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="font-display max-w-xl text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            {t.audienceTitle}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            {t.audienceBody}
          </p>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] bg-[var(--ink)] text-[var(--cream)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight">Veikala Vadība</p>
            <p className="mt-2 max-w-md text-sm text-white/65">{t.footerNote}</p>
          </div>
          <p className="text-sm font-semibold tracking-wide text-[var(--amber-soft)] uppercase">
            {t.footerCta}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
