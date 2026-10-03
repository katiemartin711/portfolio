# Katie Martin — portfolio

React portfolio published with GitHub Pages from the **root of `main`**.

Live site: [https://katiemartin711.github.io/portfolio/](https://katiemartin711.github.io/portfolio/)

The app source is in `site/`. `npm run build` writes the static site to the repository root (`index.html`, `assets/`, `images/`, `favicon.svg`), which is what GitHub Pages serves. `.nojekyll` keeps GitHub from running Jekyll on those files.

## Local development

```bash
cd site
npm install
npm run dev
```

## Publish a content change

```bash
cd site
npm run build
```

Commit the updated root files (`index.html`, `assets/`, `images/`, `favicon.svg`) and push to `main`. GitHub Pages rebuilds from that branch.

Project copy lives in `site/src/data/portfolio.ts`.
