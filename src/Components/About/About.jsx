import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className='bg-blue-100'>
        <div className=' text-5xl pt-10 text-center'> About page coming soon, till then checkout mini projects </div>
        <Link to={"/projects"} >
            <button class="m-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Go to Mini Projects section
            </button> 
        </Link>    
    </div>
  )
}

export default About