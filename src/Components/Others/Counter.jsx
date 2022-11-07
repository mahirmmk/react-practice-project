import React from 'react'
import { useState } from 'react'
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
    <div  style={{backgroundColor:"beige", minHeight:"95vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", overflow:'hidden'}} >
        <h1>Counter App</h1>
        <h1>Count: {count}  </h1>
        <button onClick={increaseCounter} > Increase </button>
        <button onClick={decreaseCount} > Decrease</button>
        <button onClick={reset}> Reset to 0</button>
    </div>
   </>
  )
}

export default Counter