import './App.css'

import React, { useState } from 'react'
import Die from './Die'
import Dice from './Dice'
import Board from './Board'

const rollDie = (id, bucket) => ({
  id,
  bucket,
  value: Math.floor(Math.random() * 6) + 1,
})

const rollStartingDice = (dieCount) => {
  const dice = []
  for (var x = 0; x < dieCount * 2; x += 1) {
    dice.push(rollDie(x, x % 2))
  }
  return dice
}

const useDice = dicePerPlayer => {
  const initialDice = rollStartingDice(dicePerPlayer)
  const [dice, setDice] = useState(initialDice)

  const updateDieWith = (test, newValues) => setDice(dice.map((die, index) => {
    if (test(die, index)) {
      if (typeof newValues === 'function') {
        return {
          ...die,
          ...newValues(die, index)
        }
      }
      return {
        ...die,
        ...newValues,
      }
    }
    return die
  }))
  const updateDie = (index, newValues) => updateDieWith(
    (die, idx) => idx === index,
    newValues,
  )
  const clearDice = player => updateDieWith(die => die.player === player, { hasFlipped: false });
  const flipDie = index => updateDie(index, die => ({ value: 7 - die.value, hasFlipped: true }))
  const moveDie = (index, bucket) => {
    if (bucket === 'trash') {
      clearDice(dice[id])
    }

    updateDie(index, { bucket })
  }

  return { dice, flipDie, moveDie }
}

const usePlayers = playerNames => {
  const [ player, setPlayer ] = useState(0)
  const [ names, setNames ] = useState(playerNames)
  const nextPlayer = () => setPlayer((player + 1) % 2)

  return {
    player,
    nextPlayer,
    names,
    setNames,
  }
}

const App = () => {
  const { dice, flipDie, moveDie } = useDice(5)
  const {
    player,
    nextPlayer,
    names,
    setNames,
  } = usePlayers(["You", "Opponent"])
  const player1Dice = dice.filter(die => die.bucket === 0)
  const player2Dice = dice.filter(die => die.bucket === 1)
  const trashDice = dice.filter(die => die.bucket === 'trash')

  const onMove = (dieClicked)

  if (player1Dice.length === 0) {
    return <p>Player 2 wins!</p>
  }

  if (player2Dice.length === 0) {
    return <p>Player 1 wins!</p>
  }

  return <div className="App">
    <Board
      player1Dice={player1Dice}
      player2Dice={player2Dice}
      trashDice={trashDice}
      flipDie={flipDie}
      playerNames={names}
    />
    <h2>Player {player + 1}'s turn</h2>
    <p>Based on <a href="https://cheapass.com/free-games/flip/">Flip</a></p>
  </div>
}

export default App
