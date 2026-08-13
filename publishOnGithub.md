# Publish the app as a website
If you want to make it available online for students, use GitHub Pages.

## Install the package
```bash
npm install gh-pages --save-dev
```

Then update package.json with:

```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
"scripts": {
  "predeploy": "vite build",
  "deploy": "gh-pages -d dist"
}
```

Then run:

```bash
npm run deploy
```

This publishes the built app to GitHub Pages.

## Important note
If your project uses Vite, the build output is in the dist folder. GitHub Pages deploys from that built version, not from the source folder.

---

If you want, I can also prepare the exact package.json changes for GitHub Pages for this project and give you the final ready-to-copy version.