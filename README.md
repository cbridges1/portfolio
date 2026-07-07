## About

This website is built using [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/). Content lives as Markdown/MDX under `src/content/`, edited directly in Git — Starlight's "Edit this page" link on each doc jumps straight to the GitHub source.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run dev
```

This command starts a local development server. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `dist` directory and can be served using any static content hosting service.

### Deployment

Pushes to `main` are built and deployed to GitHub Pages via `.github/workflows/deploy.yml`.
