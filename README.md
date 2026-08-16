# Dr. Javad Vahidi — Academic Homepage

A trilingual (English · فارسی · العربية), fully responsive academic website for
**Dr. Javad Vahidi**, Associate Professor and Head of the Department of Computer Science,
School of Mathematics and Computer Science, Iran University of Science and Technology (IUST), Tehran.

## Features

- **Three languages** — English (default), Persian and Arabic, switched from the header.
  Direction (`dir="ltr"` / `dir="rtl"`), fonts, digit systems (`2,646` / `۲٬۶۴۶` / `٢٬٦٤٦`)
  and typography all adapt automatically. The choice is remembered in `localStorage`.
- **Light and dark themes**, following the system preference on first visit.
- **Prominent Scopus and Google Scholar buttons** in the hero, plus a full grid of ten
  indexed academic profiles.
- **Circular portrait** with a concentric gold ring and a grounded drop shadow. The crop is
  tuned by `transform:scale(1.10); transform-origin:50% 28%` on `.portrait-frame img` in
  `styles.css` — raise the origin percentage to sit the face higher in the circle.
- **Monogram** (header, footer, favicon) carries a circuit-trace and binary motif on navy,
  defined once as an inline SVG data URI in `.brand-mark` and mirrored in `favicon.svg`.
- **Filterable publication list** (journal articles / conference papers / book chapters).
- Sections: Hero · Metrics · About · Philosophy · Research Interests · Publications ·
  Books · Teaching & Supervision · Academic Profiles · Contact.
- Accessible: skip link, focus rings, semantic landmarks, `prefers-reduced-motion` support,
  `<bdi>` isolation for Latin citations inside RTL text, and a print stylesheet.
- **No build step and no frameworks** — plain HTML, CSS and vanilla JavaScript.

## Structure

```
index.html                 Page markup (content keyed by data-i18n)
assets/css/styles.css      Design system, layout, RTL rules, responsive + print
assets/js/data.js          Content: research areas, publications, books, teaching, profiles
assets/js/i18n.js          EN / FA / AR translation strings
assets/js/main.js          Language + theme switching, rendering, filtering, scroll behaviour
assets/img/favicon.svg     Site icon
assets/img/dr-vahidi.jpg   Portrait photograph
```

## The portrait

The hero portrait loads from `assets/img/dr-vahidi.jpg` and is displayed as a circle. A square
source image of roughly 800×800 px or larger works best. If the file is ever missing, the site
falls back to the styled "JV" monogram automatically rather than showing a broken image.

To reframe the circular crop, adjust one line in `styles.css`:

```css
.portrait-frame img{ transform:scale(1.10); transform-origin:50% 28%; }
```

A larger `scale` zooms in; a smaller `transform-origin` percentage moves the visible area up.

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

In **Settings → Pages**, set Source to *Deploy from a branch*, then select `main` and the
`/ (root)` folder. The site is entirely static, so no build or further configuration is
required. It is served at `https://<user>.github.io/<repo>/`.

## Updating the content

Almost all content lives in `assets/js/data.js` and `assets/js/i18n.js`:

- **Publications** — add an object to `SITE_DATA.publications` with
  `type` (`journal` \| `conference` \| `chapter`), `year`, `title`, `authors`,
  `venue` (per language), `url` and `tags`.
- **Research areas, books, courses, supervision, profiles** — the corresponding arrays
  in `SITE_DATA`, each carrying `en` / `fa` / `ar` variants.
- **Interface text and section copy** — the `I18N` object, keyed to the `data-i18n`
  attributes in `index.html`.
- **Metric figures** — the `data-count` attributes on the `.metric-num` elements in
  `index.html`. Citations, h-index and i10-index (2646 / 30 / 55) are read from the author's
  Google Scholar card; refresh them when it changes.
- **Philosophy** — the pull-quote is `philQuote` in `i18n.js`, the three principle cards are
  `SITE_DATA.philosophy` in `data.js`.

## Note on sourcing

Biographical details, affiliation, research areas, metrics and publications were compiled
from Dr. Vahidi's indexed academic profiles: Scopus (author ID 9245209700), Google Scholar
(`fyeiLYMAAAAJ`), ResearchGate, DBLP (`42/8867`), IEEE Xplore (38468035600), Civilica
(researcher 184491), Iranketab, and the IUST faculty pages.

Every one of those domains was blocked by the build environment's network egress policy, so
the details below could only be reconstructed from search-result summaries. Two deliberate
choices follow from that:

- **Publications** — only records that could be confirmed against DBLP, Springer or the
  author's indexed profiles are listed. Several papers that surface under the name "Vahidi"
  in this research area belong to **A. R. Vahidi of Islamic Azad University**, a different
  researcher, and were excluded rather than risk misattribution. The list is therefore short
  and explicitly labelled as partial; expand it from Scopus and Google Scholar.
- **Books** — `SITE_DATA.books` is intentionally empty. The Iranketab catalogue was
  unreachable and inventing plausible titles would misrepresent the author's work, so the
  section renders a link to Iranketab until real entries are added.

**The Philosophy section is editorial text written for this site, not a quotation from
Dr. Vahidi.** It deliberately carries no attribution line so that nothing is put in his voice
that he did not say. If he would rather speak in the first person, replace `philQuote` and the
three `SITE_DATA.philosophy` entries with his own words.

Still to verify against the primary sources: exact degree years and awarding institutions,
the full publication record, book titles and ISBNs, the precise office address and room
number, the publication-count figure in `index.html`, and the course and supervision lists in
`data.js` — the latter two are representative of the role rather than individually confirmed.
