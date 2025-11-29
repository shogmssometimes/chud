# cHUD

cHUD is a small, independent demo app for displaying derived stats for a tabletop RPG (TTRPG). It's intentionally lightweight and intended to be used standalone or embedded into other tools.

## Features
- Simple React + TypeScript app built with Vite
- Input core ability scores (STR, DEX, CON, INT, WIS, CHA) and Level
- Example derived stats: HP, AC, Initiative, Passive Perception, Attack Bonus
- Easy to customize formulas in `src/App.tsx`
 - Input collapsE core scores: Vigor, Inference, Personality
 - Derived stats per collapsE rules:
	 - HP = Vigor + 6
	 - Capacity = Inference + 6
	 - Initiative = Personality + 6
	 - Movement = Vigor x 2 (meters)
 - Counters for HP and Viv with +/- controls
 - THE HANDBook preset for quickly loading a fallback statset
 - Easy to customize formulas in `src/App.tsx`

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

## License
MIT
