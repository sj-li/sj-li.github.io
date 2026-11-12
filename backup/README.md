# Previous Jekyll homepage

This folder preserves the previous website’s source, including all local edits present before migration. `archive-manifest.json` records the original source commit and SHA-256 hashes for the archived source files.

`index.html` and compiled assets are a browsable snapshot rendered with `/backup` as its base URL. They are marked `noindex` and are excluded from the live sitemap. `README.original.md` is the previous repository README. `CNAME` and `.gitignore` are archived copies; the active versions are in the repository root.

The original `_pages/`, `_includes/`, `_layouts/`, `_sass/`, `_data/`, `Gemfile` and `_config.yml` remain here. Local Jekyll dependencies and caches were moved here too, and remain ignored by Git. The current production site does not depend on them.

`review/figures/` contains the current per-paper thumbnail comparison, reading scope and selection rationale. `review/layout/` contains historical layout screenshots; these are not the live homepage.

To rebuild the old site for inspection, run Jekyll from this directory with a separate output destination and an explicit `/backup` base URL; do not overwrite the repository-root `index.html`.
