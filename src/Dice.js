import React from 'react'
import Die from './Die'

const Dice = ({ values, onMove }) => (
  <div
    style={{
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    {values.length ? (
      values.map(({ value, hasFlipped }, idx) => (
        <Die key={idx} value={value} hasFlipped={hasFlipped} onMove={onMove} />
      ))
    ) : (
      <p>(Empty)</p>
    )}
  </div>
)

export default Dice
