import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import BackButton from '../Others/BackButton'
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
    <div>
        <div>
            <BackButton />            
        </div>
        <div className='text-center'>
            <p className='text-5xl'> Cat Fact Generator App</p>
            <button className='bg-transparent  m-3 rounded-full  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent '
              onClick={getData}>Genrate Fact</button>
            <p className='text-4xl p-5'>{fact} </p>
        </div>
    </div>
    </>
  )
}

export default CatFact  