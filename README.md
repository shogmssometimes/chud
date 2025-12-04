# cHUD

cHUD is a small, independent demo app for displaying derived stats for a tabletop RPG (TTRPG). It's intentionally lightweight and intended to be used standalone or embedded into other tools.

## Features
- Mobile-first HUD layout (derived stats stacked above core stat row)
- Input collapsE core scores: Vigor, Inference, Personality (one-row scroller on phones)
- Derived stats per collapsE rules:
	- HP = Vigor + 6 (shown as max + adjustable counter)
	- Capacity = Inference + 6
	- Initiative = Personality + 6
	- Movement = Vigor x 2 (meters)
- HP and Viv counters with +/- controls plus visual progress bars
- Capacity/Initiative/Movement chips and ability scores row for quick reference
- THE HANDBook preset button to load a baseline collapsE stat block
- Easy to customize formulas in `src/App.tsx`

## Quick start (production preview on port 8080)

To build and preview a local production build on port 8080 run:

```bash
cd cHUD
npm install
npm run start
```

`npm run start` runs `npm run build` then `vite preview` (the app will be available at http://localhost:8080/).

If you prefer running the dev server (with hot reload):

```bash
npm run dev -- --port 8080
```

Note: if you run into an error during `npm run build` related to `@vitejs/plugin-react` (ESM import issues), a temporary workaround is to remove the plugin from `vite.config.ts` — the project already disables the plugin to provide a stable production preview. If you'd like, I can attempt to re-enable the plugin and fix any ESM compatibility issues so `npm run dev` works with the fast-refresh plugin.

## Quick start

1) Install dependencies:

```bash
cd cHUD
npm install
```

2) Run development server:

```bash
npm run dev
```

3) Open http://localhost:5173 in your browser.

## Customize formulas
Open `src/App.tsx` and tweak the `computeDerived` function to match the formulas of your TTRPG system.

## Roadmap ideas
- Add presets for popular TTRPG systems
- Allow adjustable formula rules and modifiers
- Build a compact overlay mode for in-game HUD
- Add export/import of character stat presets

### Using with collapsE — THE HANDBook
This repository includes a small "THE HANDBook preset" button which will load a sample starting attribute profile (Vigor, Inference, Personality). It is intended to get you started quickly for `collapsE`.

If you'd like, we can add actual preset sets from the Handbook or a JSON import feature so you can maintain canonical presets for your game.

## License
MIT
