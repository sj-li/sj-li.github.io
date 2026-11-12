# Shijie Li’s academic homepage

Live site: https://sj-li.com/ · GitHub Pages: `main`, repository root.

The live homepage is buildless HTML, CSS and JavaScript. `.nojekyll` ensures GitHub Pages serves these files directly. `CNAME` retains the existing custom domain.

```
index.html                Homepage content and publications
assets/css/               Helvetica typography, theme, layout and personal styles
assets/js/main.js         Navigation, publication filters and preprint disclosure
assets/images/            Portrait
assets/fonts/             Local icon fonts
assets/papers/            43 curated thumbnails and source/selection metadata
cv/                       Existing public CV URLs
backup/                   Previous Jekyll website, sources and browsable snapshot
backup/review/figures/    Per-paper before/after image review and reading notes
backup/review/layout/     Earlier layout-comparison screenshots
```

## Preview and publish

Run `python3 -m http.server 4001` from this directory, then open http://localhost:4001/.

Edit `index.html`, `assets/css/main.css` and `assets/js/main.js` directly. Publications are grouped into a collapsed preprint section followed by descending publication-year groups. Filters apply across both groups. Thumbnail provenance is recorded in `assets/papers/sources.json`.

Commit and push to `main` to trigger the existing GitHub Pages deployment. No package installation or Jekyll build is required for the live site. Keep `CNAME` and `.nojekyll` in the repository root.

The previous homepage is available at `/backup/`; existing `/about/` and `/about.html` links redirect to the new homepage. CV files retain their previous `/cv/` URLs. Search engines are directed to the new homepage; archived HTML is marked `noindex`.
