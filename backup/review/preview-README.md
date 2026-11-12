# Alternative academic homepage

A standalone local preview using the same Bootstrap/Wowchemy grid, theme styles, and shared layout rules as https://limanling.github.io/, adapted to Shijie Li’s content.

Run `python3 -m http.server 4001 --directory homepage-preview` from the repository root.

- `index.html`: personal content; a snapshot of 43 publications from the existing homepage.
- `reference-theme.css`, `shared-layout.css`: reference theme and layout styles.
- `style.css`: personal content, local icons, mobile navigation, and publication adaptations.
- `fonts.css`: Helvetica / Helvetica Neue / Arial system font stack, following the typography of https://jiafei1224.github.io/. Body text uses regular weight; headings use 600. Local icon fonts remain in `assets/fonts/`; former text font assets are retained but no longer loaded.
- `script.js`: Selected / All / Embodied AI / 3D & Spatial / Autonomous Driving / Others filtering, research disclosures, and navigation. Preprints appear first in a native, initially collapsed disclosure, ordered by original posting; 31 published papers follow in descending publication-year groups. Filters update the preprint count and hide empty year groups while preserving the disclosure state.
- `assets/papers/`: 43 curated WebP thumbnails. Images were chosen after reading each available paper or its official material, comparing candidate figures at homepage size, and preferring clear scenes, task examples, and qualitative results. `sources.json` records reading scope, selection rationale, candidates considered, source/page/figure, exact crops or panel composition, and access limitations.
- SketchIntent (WACV 2027) uses original saved CAD previews from the official SketchIntent-292 release; no public paper PDF was located. REMA and SA-RePaint use official project/demo images. SiFH uses a publisher result figure; closed full text was unavailable. WeSAM++ uses a crop of the current author-hosted framework figure and was reviewed through the public journal HTML.

The reference’s personal text, portrait, talk slides, and paper figures are not reused. Existing talk entries remain text because corresponding slide covers have not been provided. The preview is separate from the existing Jekyll homepage.

## Current image review

Open `/figure-review/` for the current per-paper before/after gallery (Selected / All 43). Click either image to inspect it at its original size. Reading notes and selection evidence are in `figure-review/figure_plan.md`; `figure_tasks.csv` and `caption_drafts.md` provide the task list and thumbnail accessibility descriptions.

## Archived layout review

Open `/review/` on the preview server for side-by-side browser screenshots of the reference, the previous layout, and the optimized layout. Desktop and publication screenshots use 1440×1080; mobile screenshots use 390×844.

Validation: all 43 local thumbnails decoded successfully; six category filters verified; mobile navigation and Escape handling verified; no horizontal overflow at 360, 390, 768, 820, 1024, and 1440 pixels.
