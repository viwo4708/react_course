import { useState } from 'react'
import './App.css'
import Character from './character'
import character_data from "./data.jsx"


/*note: props item = {item} works like :
map creates an "item" for each element in 
the array (dataset). Then for each item, a 
custom component element thingy is returned
with two props: key and item. key is set 
equal to item.id, item is set equal to item
(FROM the map function, so one element in the
dataset. Now, the individual key/value pairs 
in item can be accessed in the custom component
as a prop! prop now contains two items, props.key 
and props.item. So the values in item can 
be accessed as props.item.a, etc. */ 


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
