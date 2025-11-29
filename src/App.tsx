import React, { useState } from 'react'
import StatInput from './components/StatInput'
import DerivedStatsPanel from './components/DerivedStatsPanel'

export type CoreStats = {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
  level: number
}

const defaultStats: CoreStats = {
  str: 10,
  dex: 10,
  con: 10,
  int: 10,
  wis: 10,
  cha: 10,
  level: 1
}

export function abilityModifier(score: number) {
  return Math.floor((score - 10) / 2)
}

export function computeDerived(core: CoreStats) {
  const mods = {
    str: abilityModifier(core.str),
    dex: abilityModifier(core.dex),
    con: abilityModifier(core.con),
    int: abilityModifier(core.int),
    wis: abilityModifier(core.wis),
    cha: abilityModifier(core.cha)
  }

  // Example formulas — tweakable depending on system
  const hpBase = 10
  const hp = hpBase + mods.con * core.level
  const ac = 10 + mods.dex
  const initiative = mods.dex
  const passivePerception = 10 + mods.wis
  const attackBonus = mods.str

  return {
    hp,
    ac,
    initiative,
    passivePerception,
    attackBonus,
    mods
  }
}

export default function App() {
  const [core, setCore] = useState<CoreStats>(defaultStats)

  function update<K extends keyof CoreStats>(key: K, value: number) {
    setCore((prev) => ({ ...prev, [key]: value }))
  }

  const derived = computeDerived(core)

  return (
    <div className="app">
      <h1>cHUD — Compact HUD</h1>
      <div className="layout">
        <div className="left">
          <h2>Core Stats</h2>
          <div className="grid">
            <StatInput label="STR" value={core.str} onChange={(v) => update('str', v)} />
            <StatInput label="DEX" value={core.dex} onChange={(v) => update('dex', v)} />
            <StatInput label="CON" value={core.con} onChange={(v) => update('con', v)} />
            <StatInput label="INT" value={core.int} onChange={(v) => update('int', v)} />
            <StatInput label="WIS" value={core.wis} onChange={(v) => update('wis', v)} />
            <StatInput label="CHA" value={core.cha} onChange={(v) => update('cha', v)} />
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
          <DerivedStatsPanel derived={derived} />
        </div>
      </div>
      <footer>
        <small>cHUD demo — modify formulas in <code>src/App.tsx</code></small>
      </footer>
    </div>
  )
}
