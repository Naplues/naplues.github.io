# Zhaoqiang Guo (郭肇强) — Personal Homepage

[![Website](https://img.shields.io/badge/website-naplues.github.io-blue)](https://naplues.github.io)

The source for my academic homepage, built with [GitHub Pages](https://pages.github.com/) and the [Primer](https://github.com/pages-themes/primer) Jekyll theme.

## Overview

This repository powers my personal website at **[naplues.github.io](https://naplues.github.io)**, which serves as an online curriculum vitae covering:

- **Basic information** — affiliation, contact, and address
- **Introduction** — academic background and research interests
- **Experience** — education and professional career
- **News** — recent paper acceptances and updates
- **Publications** — international and domestic papers (journals, conferences, arXiv)
- **Appendix** — links to CCF publication catalogs

Research interests focus on **AI for Software Engineering (AI4SE)**, including unit test generation, code review, bug localization, software defect prediction, and self-admitted technical debts.

## Repository Structure

```
.
├── _config.yml        # Jekyll site configuration (theme, title, description)
├── index.md           # Main page content (info, experience, publications)
├── photos/            # Profile and personal photos
├── publications/      # Publication-related materials (PDFs, slides, etc.)
├── resources/         # Auxiliary site resources
├── src/               # Source assets / scripts
├── pyproject.toml     # Python project metadata (tooling only)
└── README.md
```

## Local Development

The site is static Markdown rendered by Jekyll. To preview locally:

```bash
# Install Ruby and Bundler, then:
bundle install
bundle exec jekyll serve
# Open http://127.0.0.1:4000
```

Alternatively, since the content is plain Markdown, you can simply preview `index.md` in any Markdown viewer.

## Deployment

Pushes to the `master` branch are automatically published by GitHub Pages to
[naplues.github.io](https://naplues.github.io).

## Contact

- **E-mail:** guozhaoqiang@bcds.org.cn / gzq.qiang@gmail.com
- **Address:** Yuquan Campus, Zhejiang University, 38 Zheda Road, Xihu District, Hangzhou, Zhejiang, 310027, China
