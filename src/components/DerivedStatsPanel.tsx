import React from 'react'
import type { CoreStats } from '../App'

type Derived = ReturnType<typeof import('../App').computeDerived>

export default function DerivedStatsPanel({ derived }: { derived: Derived }) {
  return (
    <div className="derived-panel">
      <h2>Derived Stats</h2>
      <ul>
        <li>
          <strong>HP</strong>: {derived.hp}
        </li>
        <li>
          <strong>AC</strong>: {derived.ac}
        </li>
        <li>
          <strong>Initiative</strong>: {derived.initiative}
        </li>
        <li>
          <strong>Passive Perception</strong>: {derived.passivePerception}
        </li>
        <li>
          <strong>Attack Bonus</strong>: {derived.attackBonus}
        </li>
      </ul>
      <div className="mods">
        <h3>Ability Modifiers</h3>
        <div className="mod-grid">
          {Object.entries(derived.mods).map(([k, v]) => (
            <div key={k} className="mod">
              <strong>{k.toUpperCase()}</strong>: {v >= 0 ? `+${v}` : v}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
