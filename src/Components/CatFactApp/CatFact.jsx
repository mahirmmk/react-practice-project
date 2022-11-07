import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
function CatFact  () {
    const [fact, setFact]=useState("")

    const getData=()=>{
        axios.get("https://catfact.ninja/fact").then((data)=>{
            setFact(data.data.fact)
        }).catch()
    }
    
    useEffect(()=>{
        getData()
    }, [])

    // fetch("https://catfact.ninja/fact").then((res)=>{
    //     res.json().then((data)=>{
    //         setFact(data.fact)
    //     }).catch()
    // }).catch()
  return (
    <>
    <div  style={{backgroundColor:"lightgreen", height:"95vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}} >
        <h1>Cat Facts App</h1>
        <button onClick={getData}>Genrate Fact</button>
        <h3>{fact}</h3>
    </div>
    
    </>
  )
}

export default CatFact  