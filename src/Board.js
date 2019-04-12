import React from 'react'
import Dice from './Dice'

const Board = ({ player1Dice, player2Dice, trashDice, onMove }) => {
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <h2>Player 1</h2>
      <Dice values={player1Dice} onMove={onMove} />
      <h2>Trash</h2>
      <Dice values={trashDice} onMove={onMove} />
      <h2>Player 2</h2>
      <Dice values={player2Dice} onMove={onMove} />
    </div>
  )
}

export default Board
