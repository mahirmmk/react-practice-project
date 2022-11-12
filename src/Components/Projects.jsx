import React from 'react'
import { Link } from 'react-router-dom'
function Projects() {
  return (
    <div className=''>
        <h1 className='text-2xl text-center'>List of react based mini projects</h1>
        <div className="flex justify-center items-center text-center   h-28 flex-wrap">
            <CategoryBox path="/home" text="Home" />
            <CategoryBox path="/todo" text="To-do App" />
            <CategoryBox path="/counter" text="Counter app" />
            <CategoryBox path="/catfact" text="Cat Fact Genrator app" />
            <CategoryBox path="/excuse" text="Excuse Genrator app" />
            <CategoryBox path="/agepredict" text="Age Predictor" />                          
            <CategoryBox path="/home" text="Home" />
            <CategoryBox path="/home" text="Home" />
        </div>
    </div>
  )
}
const CategoryBox=(props)=>{

    return<>
      <div  className='md:w-1/4 w-80 m-3 h-full shadow-lg rounded-lg bg-blue-800 hover:bg-blue-500 duration-300 hover:shadow-md ' >
        <Link to={props.path} >
         <button className='h-full w-full text-4xl text-white '> {props.text} </button>
        </Link>
      </div>
    </>  
  }

export default Projects