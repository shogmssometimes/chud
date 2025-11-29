import React, { useState } from 'react'
import StatInput from './components/StatInput'
import DerivedStatsPanel from './components/DerivedStatsPanel'

export type CoreStats = {
  vigor: number
  inference: number
  personality: number
}

export const defaultStats: CoreStats = {
  vigor: 3,
  inference: 2,
  personality: 2
}

export function abilityModifier(score: number) {
  // Keep a simple NC to modifier mapping (if you want different rules, adjust here)
  return Math.floor(score)
}

export function computeDerived(core: CoreStats) {
  // Following collapsE rules from your request:
  // HP = Vigor + 6
  // Capacity = Inference + 6
  // Initiative = Personality + 6
  // Movement = Vigor * 2 (meters)
  const vigor = core.vigor
  const inference = core.inference
  const personality = core.personality

  const hp = vigor + 6
  const capacity = inference + 6
  const initiative = personality + 6
  const movement = vigor * 2 // meters

  return {
    hp,
    capacity,
    initiative,
    movement,
    vigor,
    inference,
    personality
  }
}

export default function App() {
  const [core, setCore] = useState<CoreStats>(defaultStats)
  const [hpCounter, setHpCounter] = useState<number>(defaultStats.vigor + 6)
  const [viv, setViv] = useState<number>(1) // default Viv value as a counter

  function update<K extends keyof CoreStats>(key: K, value: number) {
    setCore((prev: CoreStats) => ({ ...prev, [key]: value }))
  }

  const derived = computeDerived(core)

  // Keep the HP counter synced with derived hp if core changes
  React.useEffect(() => {
    setHpCounter(derived.hp)
  }, [derived.hp])

  return (
    <div className="app">
      <h1>cHUD — Compact HUD</h1>
      <div className="layout">
        <div className="left">
          <h2>Core Stats</h2>
          <div className="grid">
            <StatInput label="Vigor" value={core.vigor} onChange={(v) => update('vigor', v)} />
            <StatInput label="Inference" value={core.inference} onChange={(v) => update('inference', v)} />
            <StatInput label="Personality" value={core.personality} onChange={(v) => update('personality', v)} />
            <div className="control">
              <label>Level</label>
              <input
                type="number"
                className="number-input"
                value={core.level}
                min={1}
                onChange={(e) => update('level', Number(e.target.value || 1))}
              />
            </div>
          </div>
        </div>
        <div className="right">
          <DerivedStatsPanel
            derived={derived}
            hpCounter={hpCounter}
            onHpChange={(v: number) => setHpCounter(v)}
            viv={viv}
            onVivChange={(v: number) => setViv(v)}
          />
          <div className="presets">
            <button
              onClick={() => {
                // THE HANDBook preset — an example starting set you can tweak
                const preset = { vigor: 3, inference: 2, personality: 2 }
                setCore(preset)
              }}
            >
              Load THE HANDBook preset
            </button>
          </div>
        </div>
      </div>
      <footer>
        <small>cHUD demo — modify formulas in <code>src/App.tsx</code></small>
      </footer>
    </div>
  )
}
