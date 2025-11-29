cHUD — deploy notes

To deploy to Netlify or Vercel, build the project and upload the `dist/` folder.

Build:

```bash
npm run build
```

Preview build locally:

```bash
npm run preview
```

Vite's default build output is `dist/` — configure the host to use that as a static site root or serve via a simple static server.
