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
  const hpMax = derived.hp || 1
  const hpCurrent = hpCounter ?? derived.hp
  const hpPercent = Math.max(0, Math.min(100, (hpCurrent / hpMax) * 100))

  const vivValue = viv ?? 0
  const vivMax = derived.capacity || Math.max(vivValue, 1)
  const vivPercent = Math.max(0, Math.min(100, (vivValue / vivMax) * 100))

  return (
    <div className="derived-panel">
      <h2>Derived Stats</h2>
      <div className="stat-stack">
        <div className="stat-card hp-card">
          <div className="stat-label">
            <strong>HP</strong>
            <span>
              {hpCurrent} / {hpMax}
            </span>
          </div>
          <div className="stat-bar" role="img" aria-label={`HP ${hpCurrent} of ${hpMax}`}>
            <div className="bar-fill" style={{ width: `${hpPercent}%` }} />
          </div>
          {onHpChange && (
            <div className="counter-controls inline">
              <button onClick={() => onHpChange(hpCurrent - 1)}>-</button>
              <span>{hpCurrent}</span>
              <button onClick={() => onHpChange(hpCurrent + 1)}>+</button>
            </div>
          )}
        </div>

        <div className="stat-card viv-card">
          <div className="stat-label">
            <strong>Viv</strong>
            <span>
              {vivValue} / {vivMax}
            </span>
          </div>
          <div className="stat-bar" role="img" aria-label={`Viv ${vivValue} of ${vivMax}`}>
            <div className="bar-fill" style={{ width: `${vivPercent}%` }} />
          </div>
          {onVivChange && (
            <div className="counter-controls inline">
              <button onClick={() => onVivChange(vivValue - 1)}>-</button>
              <span>{vivValue}</span>
              <button onClick={() => onVivChange(vivValue + 1)}>+</button>
            </div>
          )}
        </div>

        <div className="stat-row trio">
          <div className="chip">
            <span>Capacity</span>
            <strong>{derived.capacity}</strong>
          </div>
          <div className="chip">
            <span>Initiative</span>
            <strong>{derived.initiative}</strong>
          </div>
          <div className="chip">
            <span>Movement</span>
            <strong>{derived.movement} m</strong>
          </div>
        </div>

        <div className="mods">
          <h3>Ability Scores</h3>
          <div className="mod-grid">
            <div className="mod">
              <strong>Vigor</strong>
              <span>{derived.vigor}</span>
            </div>
            <div className="mod">
              <strong>Inference</strong>
              <span>{derived.inference}</span>
            </div>
            <div className="mod">
              <strong>Personality</strong>
              <span>{derived.personality}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
