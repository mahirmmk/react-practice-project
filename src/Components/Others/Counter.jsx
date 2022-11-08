import React from 'react'
import { useState } from 'react'
import BackButton from './BackButton'
const btn="bg-transparent  m-3 rounded-full  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
function Counter() {
    const [count, setCount]=useState(0)

    const increaseCounter =()=>{
        setCount(count+1)
    }
    const decreaseCount=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
  return (
   <>
   
    <div>
        <BackButton />
    </div>
    <div>
        <div className='text-5xl text-center' >Counter App </div>
        <div className=' mt-10 text-3xl text-center' >Current Count:{count} </div>
        <div className="text-center">
            <button className={btn} onClick={increaseCounter} > Increase </button>
            <button className={btn} onClick={decreaseCount} > Decrease</button>
            <button className={btn} onClick={reset}> Reset to 0</button>

        </div>
        

    </div>
   
   </>
  )
}

export default Counter