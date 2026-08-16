# Dr. Javad Vahidi — Academic Homepage

A trilingual (English · فارسی · العربية), fully responsive academic website for
**Dr. Javad Vahidi**, Associate Professor and Head of the Department of Computer Science,
School of Mathematics and Computer Science, Iran University of Science and Technology (IUST), Tehran.

## Features

- **Three languages** — English (default), Persian and Arabic, switched from the header.
  Direction (`dir="ltr"` / `dir="rtl"`), fonts, digit systems (`2,245` / `۲٬۲۴۵` / `٢٬٢٤٥`)
  and typography all adapt automatically. The choice is remembered in `localStorage`.
- **Light and dark themes**, following the system preference on first visit.
- **Prominent Scopus and Google Scholar buttons** in the hero, plus a full grid of ten
  indexed academic profiles.
- **Filterable publication list** (journal articles / conference papers / book chapters).
- Sections: Hero · Metrics · About · Research Interests · Publications · Books ·
  Teaching & Supervision · Academic Profiles · Contact.
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
assets/img/dr-vahidi.jpg   Portrait  ← add this file (see below)
```

## Adding the portrait

The hero portrait loads from `assets/img/dr-vahidi.jpg`. **This file is not yet in the
repository** — add the professional photograph there. Until it exists the site displays a
styled "JV" monogram automatically, so nothing appears broken.

A square image of roughly 800×800 px or larger gives the best result.

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

Push the branch, then in **Settings → Pages** select the branch and the `/` (root) folder.
The site is entirely static, so no further configuration is required.

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
  `index.html`.

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

Still to verify against the primary sources: exact degree years and awarding institutions,
the full publication record, book titles and ISBNs, the precise office address and room
number, the metric figures in `index.html`, and the course and supervision lists in
`data.js` — the latter two are representative of the role rather than individually confirmed.
