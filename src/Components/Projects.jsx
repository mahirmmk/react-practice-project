import React from 'react'
import { Link } from 'react-router-dom'
function Projects() {
  return (
    <div className=' bg bg-gradient-to-b from-red-100 to-slate-200' >
        <h1 className='text-2xl text-center'>List of react based mini projects</h1>
        <div className="flex flex-wrap -mb-4 mx-2 mt-10 ">
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
      <div className="w-full  md:w-1/3 mb-8 px-2  ">
        <Link  to={props.path} > <div   className="h-32 rounded-3xl shadow-md bg-indigo-200 text-center text-4xl md:text-6xl  hover:bg-blue-500 hover:text-blue-50 transition-all duration-300 "> {props.text} </div></Link>
      </div>
    </>
  
  }

export default Projects