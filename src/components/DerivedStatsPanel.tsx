import React from 'react'
import type { CoreStats } from '../App'

type Derived = ReturnType<typeof import('../App').computeDerived>

export default function DerivedStatsPanel({
  derived,
  hpCounter,
  onHpChange,
  viv,
  onVivChange,
  core,
  onCoreChange
}: {
  derived: Derived
  hpCounter?: number
  onHpChange?: (v: number) => void
  viv?: number
  onVivChange?: (v: number) => void
  core: CoreStats
  onCoreChange: <K extends keyof CoreStats>(key: K, value: number) => void
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
          <h3>Core Stats</h3>
          <div className="core-grid">
            {(
              [
                ['vigor', 'Vigor'],
                ['inference', 'Inference'],
                ['personality', 'Personality']
              ] as Array<[keyof CoreStats, string]>
            ).map(([key, label]) => (
              <div className="core-card" key={key}>
                <span className="core-label">{label}</span>
                <div className="core-controls">
                  <button onClick={() => onCoreChange(key, Math.max(0, core[key] - 1))}>-</button>
                  <input
                    type="number"
                    value={core[key]}
                    min={0}
                    max={30}
                    onChange={(e) => onCoreChange(key, Number(e.target.value || 0))}
                  />
                  <button onClick={() => onCoreChange(key, core[key] + 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
