import React, { useState } from 'react'

import Table from './components/Table'
import Form from './components/Form'

const App = () => {
  const [players, setPlayers] = useState([
    { firstName: 'Alex', lastName: 'Abrams', score: 99 },
    { firstName: 'Junge', lastName: 'AAJohn', score: 99 },
    { firstName: 'Vera', lastName: 'Rob', score: 77 },
    { firstName: 'Geary', lastName: 'Alice', score: 77 },
  ])

  const delPlayer = (firstName, lastName) => {
    const filteredPlayers = players.filter(player => player.firstName !== firstName && player.lastName !== lastName)
    setPlayers(filteredPlayers)
  }

  const addPlayer = (firstName, lastName, score) => setPlayers([...players, { firstName, lastName, score }])

  return (
    <>
      <Table rows={players} delPlayer={delPlayer} />
      <Form addPlayer={addPlayer} />
    </>
  )
}

export default App
