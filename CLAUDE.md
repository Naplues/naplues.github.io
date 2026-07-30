# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The source for Zhaoqiang Guo's academic homepage at **naplues.github.io**, served by GitHub Pages using the `jekyll-theme-primer` theme (configured in `_config.yml`). Pushes to `master` are published automatically by GitHub Pages — there is no separate build/deploy step.

## Local development

```bash
bundle install
bundle exec jekyll serve   # http://127.0.0.1:4000
```

There is no Gemfile committed; dependencies come from the GitHub Pages gem environment. Because the page is mostly hand-written HTML, `index.html` can also be previewed directly in a browser (the custom layout's nav links use in-page anchors).

## Architecture

This is a small static site. The important pieces and how they connect:

- **`index.html`** — the entire page body. It has Jekyll front matter (`layout: default`) but the content is hand-authored HTML, **not** Markdown. (The README references `index.md`; that file no longer exists — `index.html` is the source of truth.) Sections, in order, are: Introduction, Research, Experience, News, Service (`#academic-services`), Publication, Appendix. The topnav anchors in the layout must match these `id`s.
- **`_layouts/default.html`** — overrides the Primer theme's default layout. Defines the `.topnav` (with hardcoded section links), the `.page` wrapper, footer, and links `assets/css/style.css`. Anything structural (nav, page width, footer) lives here, not in `index.html`.
- **`assets/css/style.css`** — all custom styling. The recent commit history is almost entirely layout/CSS tweaks (page width, profile row stacking, section ordering), so visual changes are concentrated here.
- **`assets/`** — `css/`, `img/` (research-direction SVG watermarks), `favicon/` (link icons referenced from `index.html`).
- **`photos/`** — profile/personal images referenced by `index.html` and `resources/cv.md`.
- **`publications/`** — PDFs of papers, linked from the Publication section.

## CV generation (Python, unrelated to the live site)

`src/generation.py` builds a Chinese CV PDF from `resources/cv.md` using the `md2pdf` library (`convert_markdown_to_pdf_html`, with Mermaid enabled, A4). It rewrites the `photos/2022.jpg` path to an absolute path before conversion and writes to `assets/<date> 郭肇强个人简历.pdf`. Run from the project venv:

```bash
.venv/bin/python src/generation.py
```

`pyproject.toml` declares `requires-python = ">=3.14"` and no dependencies (md2pdf is installed into the venv separately). This tooling produces a local PDF artifact and is not part of the GitHub Pages build.
