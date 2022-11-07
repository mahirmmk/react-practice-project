import React from 'react'
import { useState } from 'react';

const ExampleShowText=()=> {
  const [visibility, setVisibility]=useState(true);
  const [textColor, setTextColor]=useState("blue");


  const visibilityHandler = ()=>{
    setVisibility(!visibility)
  }
  const colorChanger =()=>{
    setTextColor(textColor==="blue"?"SlateGray":"blue")
  }

  return (
    <div  style={{backgroundColor:"khaki", overflow:'hidden', width:"100%"}} >
      <button onClick={visibilityHandler} > Show / Hide text</button>
      {visibility && 
        <>
        <h1 style={{color:textColor}} > Hi my name is Mahir </h1>
        <button onClick={colorChanger}  > Change Text color to {textColor==="blue"?"SlateGray":"blue"} </button>
        </>        
      }
    </div>
  )
}

export default ExampleShowText;