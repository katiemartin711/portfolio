# Katie Martin — portfolio

A React portfolio for GitHub Pages. The projects, descriptions, and links match the [Notion portfolio](https://www.notion.so/Katie-Martin-Data-Analytics-Frontend-Development-Portfolio-b8b000636529415dbfae4197237afd23): telco churn, the coffee shop dashboard, DataCo supply chain, KetoKind, and The Roaring Market.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

Project copy lives in `src/data/portfolio.ts`. Images are in `public/images/`.

## GitHub Pages

The site is a static Vite build. Asset paths are relative (`base: "./"`), so it loads at `https://katiemartin711.github.io/portfolio/` without a router.

1. In the repository, open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Merge to `main`. The [deploy workflow](.github/workflows/deploy.yml) builds `dist` and publishes it.

The live URL will be [https://katiemartin711.github.io/portfolio/](https://katiemartin711.github.io/portfolio/).

Pull requests run the production build. Only pushes to `main` deploy.
