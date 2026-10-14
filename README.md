# Veikala Vadība — landing

Public marketing landing for **Veikala Vadība** (shop & warehouse management). EN + LV, CTA is **Coming soon** only — no demo link, no signup form.

This repo is separate from the Laravel app (`Veikala-Vadiba`).

## Live site

**GitHub Pages:** [https://andrejsvai.github.io/veikala-vadiba-web/](https://andrejsvai.github.io/veikala-vadiba-web/)

Built assets are published on the `gh-pages` branch. `.github/workflows/deploy-pages.yml` is also present for Actions-based deploys.

## Local development

```bash
npm install
npm run dev
```

Dev server defaults to [http://127.0.0.1:43127/veikala-vadiba-web/](http://127.0.0.1:43127/veikala-vadiba-web/) (`base` matches Pages path).

```bash
npm run build
npm run preview
```

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- i18n strings in `src/i18n.ts` (locale stored in `localStorage`)
- Production build externalizes React to esm.sh for a small Pages bundle

## Deploy

- **Live:** `gh-pages` branch → https://andrejsvai.github.io/veikala-vadiba-web/
- **Optional Actions:** push to `main` runs `.github/workflows/deploy-pages.yml` (requires Pages source = GitHub Actions)
