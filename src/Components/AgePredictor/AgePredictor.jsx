import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'  
import BackButton from '../Others/BackButton'
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
    <div className='bg-orange-100 min-h-screen'>
      <div>
        <BackButton />
      </div>
      <div className='text-center'>
        <p className='text-5xl p-2 m-1 text-center'> Age Predictor App </p>
        <input className='outline-2 outline-gray-700 rounded-lg p-2' onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter you Name' />
        <button className="border-1 bg-blue-200 border-blue-800 rounded-lg p-2 hover:bg-blue-700 hover:text-blue-100 duration-300 mx-2" onClick={getData} >Predict Age</button>
        <div className='my-2 text-3xl p-2 bg-slate-400'>
          <p>Name:  {data?.name} </p>
          <p>Age: {data?.age}</p>
          <p>Count:  {data?.count}</p>

        </div>
      </div>
        

    </div>
  
    </>
  )
}

export default AgePredictor