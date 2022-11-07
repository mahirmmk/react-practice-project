
import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function ExcuseGenrator() {
    const [category, setCategory]=useState("")
    const [excuse, setExcuse]=useState(null)

    const fetchData=(cat)=>{
        axios.get(`https://excuser.herokuapp.com/v1/excuse/${cat}`).then((res)=>{
            setExcuse(res.data[0].excuse)
        }).catch()
    }

  return (
    <>
    <div  style={{backgroundColor:"LightSkyBlue", minHeight:"95vh"}} >
        <h1>Random Excuse Generator</h1>
        <h2>Select a cetegory for excuse</h2>
        <button onClick={(e)=>fetchData("family")} > Family </button>
        <button onClick={(e)=>fetchData("office")} > Office </button>
        <button onClick={(e)=>fetchData("developers")} > Developers </button>
        <button onClick={(e)=>fetchData("funny")} > Funny </button>
        <h1 style={{backgroundColor:"lightsalmon"}} > {excuse}  </h1>

    </div>
    </>
  )
}

export default ExcuseGenrator