import React from 'react'

type Props = {
  label: string
  value: number
  onChange: (v: number) => void
}

export default function StatInput({ label, value, onChange }: Props) {
  return (
    <div className="stat-input">
      <label>{label}</label>
      <input
        type="number"
        value={value}
        min={1}
        max={30}
        onChange={(e) => onChange(Number(e.target.value || 0))}
      />
    </div>
  )
}
