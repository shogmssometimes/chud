import React from 'react'

type Derived = ReturnType<typeof import('../App').computeDerived>

export default function DerivedStatsPanel({
  derived,
  hpCounter,
  onHpChange,
  viv,
  onVivChange
}: {
  derived: Derived
  hpCounter?: number
  onHpChange?: (v: number) => void
  viv?: number
  onVivChange?: (v: number) => void
}) {
  return (
    <div className="derived-panel">
      <h2>Derived Stats</h2>
      <ul>
        <li>
          <strong>HP</strong>: {derived.hp} {hpCounter !== undefined && <span className="counter">(Current: {hpCounter})</span>}
        </li>
        <li>
          <strong>Capacity</strong>: {derived.capacity}
        </li>
        <li>
          <strong>Initiative</strong>: {derived.initiative}
        </li>
        <li>
          <strong>Movement</strong>: {derived.movement} m
        </li>
      </ul>
      <div className="mods">
          <h3>Ability Scores</h3>
        <div className="mod-grid">
          {/* For collapsE, display raw scores */}
          <div className="mod">
            <strong>Vigor</strong>: {derived.vigor}
          </div>
          <div className="mod">
            <strong>Inference</strong>: {derived.inference}
          </div>
          <div className="mod">
            <strong>Personality</strong>: {derived.personality}
          </div>
        </div>
      </div>
      <div className="counters">
        <div className="counter-row">
          <label>HP</label>
          {onHpChange && (
            <div className="counter-controls">
              <button onClick={() => onHpChange(hpCounter! - 1)}>-</button>
              <span>{hpCounter}</span>
              <button onClick={() => onHpChange(hpCounter! + 1)}>+</button>
            </div>
          )}
        </div>
        <div className="counter-row">
          <label>Viv</label>
          {onVivChange && (
            <div className="counter-controls">
              <button onClick={() => onVivChange((viv || 0) - 1)}>-</button>
              <span>{viv}</span>
              <button onClick={() => onVivChange((viv || 0) + 1)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
