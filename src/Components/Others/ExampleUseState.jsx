import React from 'react'
import { useState } from 'react'
import ExampleShowText from './ExampleShowText'

function ExampleUseState() {
    const [color, setColor]=useState("orange")
    const [height, setHeight]=useState(90)

    const colorHandler=(event)=>{
      
        setColor(event.target.value)
    }
    const heightHandler=(event)=>{
        setHeight(event.target.value)
    }

  return (
    <div  style={{backgroundColor:`${color}`, minHeight:"95vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", overflow:'hidden'}} >
        <label > Enter any color name or color code </label>
        <input type="text"  name="color" onChange={colorHandler} />
        <h1> Current color name: {color} </h1>
        <br/>
        <label >Set Height of div with the bar</label>
        <input type="range" name="height" id="" onChange={heightHandler} max={90} min={40} defaultValue={90} />
        <h1>Current Height : {height} vh</h1>

        <ExampleShowText />
    </div>
  )
}

export default ExampleUseState