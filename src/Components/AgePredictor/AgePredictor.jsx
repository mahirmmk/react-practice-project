import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function AgePredictor() {
    const [name, setName]=useState("")
    const [data, setData]=useState(null)

    const getData=()=>{
        axios.get(`https://api.agify.io?name=${name}`).then((res)=>{
        setData(res.data)
        }).catch()
    }

  return (
    <>
    <div  style={{backgroundColor:"gold", minHeight:"95vh"}} >
        <h1>Age Predictor App</h1>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter you Name' />
        <button onClick={getData} >Predict Age</button>
        <div style={
            {border:"1px solid grey", 
            backgroundColor:"lightseagreen", 
            width:"50%" , 
            margin:"auto auto"
            }}>
            <h1>Name: {data?.name} </h1>
            <h1>Age:{data?.age}</h1>
            <h1>Count:{data?.count}</h1>
        </div>
        
    </div>
    </>
  )
}

export default AgePredictor