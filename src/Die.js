import React from 'react'

const Die = ({ value, onClick, hasFlipped }) => (
  <div style={{
    height: '2em',
    width: '2em',
    border: '1px solid black',
    backgroundColor: hasFlipped ? 'darkgray' : 'green',
    color: 'black',
    fontStyle: 'bold',
    fontSize: '2em',
    verticalAlign: 'middle',
    lineHeight: '2em',
    padding: '0.5em',
    margin: '1em',
  }}
  onClick={onClick}
  >
    <span style={{
    }}>
      {value}
    </span>
  </div>
)

export default Die
