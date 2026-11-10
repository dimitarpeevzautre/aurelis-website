# Aurelis website

Static marketing site for the Aurelis One electric pop-top camper, live at
**https://aurelis.mobile**. Plain HTML/CSS with a little vanilla JS; there is
no build step and no dependencies.

## Structure

| Path | What it is |
| --- | --- |
| `index.html`, `camper.html`, `pricing.html`, `fleets.html`, `about.html` | Main pages |
| `legal.html`, `privacy.html`, `404.html` | Legal notice, privacy policy, not-found page |
| `css/style.css` | All styles, including the self-hosted `@font-face` rules |
| `js/enquiry-form.js` | Shared submit handler for the enquiry forms on `pricing.html` and `fleets.html` |
| `fonts/` | Self-hosted WOFF2 fonts (latin + latin-ext subsets) |
| `images/` | Photos and design renders: original JPEG plus WebP renditions (`<name>-<width>.webp`) |
| `favicon*`, `icon-*.png`, `apple-touch-icon.png`, `site.webmanifest` | Icons and web-app manifest |
| `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml` | Custom domain, Pages and crawler config |
| `docs/` | Internal planning notes. **Not published.** |
| `.github/workflows/deploy-pages.yml` | Deploy workflow |

## Local preview

```sh
python -m http.server 8000
# open http://localhost:8000
```

Use a server rather than opening the files directly: fonts and CSS are
referenced with root-relative paths (`/fonts/...`).

## Deploy

GitHub Pages serves the `gh-pages` branch at the custom domain in `CNAME`.
Every push to `main` (and, until the default branch is switched, to
`claude/vw-california-camper-site-151wk2`) runs
`.github/workflows/deploy-pages.yml`, which copies an **allowlist** of site
files (`*.html`, `css/`, `js/`, `fonts/`, `images/`, icons, `CNAME`,
`.nojekyll`, `robots.txt`, `sitemap.xml`, `site.webmanifest`) into a fresh
commit and publishes it to `gh-pages`. Anything else in the repo (this
README, `docs/`, `.github/`) is not served.

If you add a new top-level directory or file type that the site needs, add
it to the "Assemble site" step of the workflow. Never commit to `gh-pages`
by hand; it is regenerated on every deploy.

## Enquiry forms

The forms on `pricing.html` and `fleets.html` post to
[FormSubmit](https://formsubmit.co) using an alias in the form `action` (the
inbox address is not in the source). With JS, `js/enquiry-form.js` posts to
FormSubmit's AJAX endpoint and shows the inline confirmation; it includes the
`_honey` honeypot and drops submissions that fill it or arrive within 3
seconds of page load. Without JS the form posts normally.

## Images

- **Design renders** (local files in `images/`, marked with a "Design render"
  badge on the page): no Aurelis One has been built yet, so vehicle and
  interior imagery is rendered. See issue #2 for open caption/imagery gaps.
- **Base-vehicle photos** of the Kia PV5 Passenger are hot-linked from
  Wikimedia Commons via `Special:FilePath` (with `?width=` for responsive
  sizes); each carries a licence credit link next to it (CC0 / CC BY /
  CC BY-SA).
- `og-cover.jpg` (1200x630) is the social-sharing image.

To add or replace a local photo: put the JPEG in `images/`, generate WebP
renditions at 640, 1024 and 1600 px wide (plus the original width) named
`<name>-<width>.webp`, and reference them with `<picture>` + `srcset`/`sizes`
as the existing pages do. Always set `width` and `height` on `<img>`.

## Fonts

Self-hosted from Google Fonts (all under the SIL Open Font License):

- **Bricolage Grotesque** (display) and **Instrument Sans** (body) are
  variable fonts: one file per subset, declared with a weight range.
- **IBM Plex Mono** (labels) is static, one file per weight.

## Analytics

Cloudflare Web Analytics (cookieless beacon in each page `<head>`), disclosed
in `privacy.html`.
