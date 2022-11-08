import React from 'react'
import { Link } from 'react-router-dom'

function BackButton() {
  return (
    <Link to={"/projects"} >
            <button className="bg-transparent  m-3 rounded-full  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent ">
                Back
            </button>
    </Link>
  )
}

export default BackButton