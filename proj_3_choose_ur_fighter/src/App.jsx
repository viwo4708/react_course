import { useState } from 'react'
import './App.css'
import Character from './character'
import character_data from "./data.jsx"

function App() {

  const characters = character_data.map(item => {
    return (
      <Character 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <div className='title'>
        <h1>CHOOSE</h1> 
        <h1>YOUR</h1> 
        <h1>FIGHTER</h1>
      </div>
      <div className='Characters-Container'>
        {characters}
      </div>
    </div>
  )
}

export default App
