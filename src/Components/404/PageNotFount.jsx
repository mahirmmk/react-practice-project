import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFount() {
  return (
    <div className='text-5xl sm:text-5xl l text-center' > Error 404, PageNotFount
    <Link className='block m-12  p-10 text-3xl sm:text-5xl  border bg-blue-400 hover:bg-blue-800 hover:text-blue-50 transition-all duration-500 ' to={"/"} > Go back to home page </Link>
    </div>
  )
}

export default PageNotFount