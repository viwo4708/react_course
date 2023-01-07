import { useState } from 'react'

function Character(props) {

  var displaymode = "";

  if (props.item.id === 7) {
    displaymode = "block";
  }
  else {
    displaymode = "none";
  }

  return (
    <div className="Character">
        <h2>{props.item.Name}</h2>

        <img className='CharImg' src={props.item.imageUrl}></img>
        <div className='stats'>
          <h4>Spawn Point: <span className='infoItem'>{props.item.Spawn}</span></h4>
          <h4>Age: <span className='infoItem'>{props.item.Age}</span></h4>
          <h4>Intelligence: <span className='infoItem'>{props.item.Intelligence}/10</span></h4>
          <h4>Power: <span className='infoItem'>{props.item.Power}/10</span></h4>
          <h4>Speed: <span className='infoItem'>{props.item.Speed}/10</span></h4>
          <h4>Agility: <span className='infoItem'>{props.item.Speed}/10</span></h4>
          <h4>Stamina: <span className='infoItem'>{props.item.Stamina}/10</span><span style={{display: displaymode, float: "right"}} className='qualifier'> *not for combat</span></h4>
          <h4>Info: <span className='infoItem'>{props.item.Description}</span></h4>
        </div>
    </div>
  )
}

export default Character
