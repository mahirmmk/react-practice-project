
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import BackButton from '../Others/BackButton'

function ExcuseGenrator() {
    const [category, setCategory]=useState("")
    const [excuse, setExcuse]=useState(null)

    const fetchData=(cat)=>{
        axios.get(`https://excuser.herokuapp.com/v1/excuse/${cat}`).then((res)=>{
            setExcuse(res.data[0].excuse)
        }).catch()
    }
    const btn ="bg-transparent  m-3 rounded-full  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent "

  return (
    <>
    <div>
      <div>
        <BackButton />
      </div>
      <div className='text-center'>
        <p className='text-6xl'> Excuses Generator App </p>
        <div className='m-5'>
          <button className={btn} onClick={(e)=>fetchData("family")} > Family </button>
          <button className={btn} onClick={(e)=>fetchData("office")} > Office </button>
          <button className={btn} onClick={(e)=>fetchData("developers")} > Developers </button>
          <button className={btn} onClick={(e)=>fetchData("funny")} > Funny </button>
        </div>        
        <p className='text-5xl p-5'> {excuse} </p>
      </div>
    </div>
    
    </>
  )
}

export default ExcuseGenrator