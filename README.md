# Portfolio Site

This project is a Vite + React portfolio that builds as a standalone static site for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The production output is generated in the dist folder and is ready to deploy to GitHub Pages.

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Ensure the GitHub Actions workflow in .github/workflows/deploy.yml is present.
3. Open the repository Settings > Pages and make sure GitHub Actions is selected as the source.
4. The workflow will publish the site automatically on pushes to main or master.
