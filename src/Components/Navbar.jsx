import React, { useState } from "react";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
    
    return <>
      <div className="bg-blue-800 flex text-blue-100  justify-evenly md:justify-start" >
        <Link to={"/home"} className="inline-block py-1 px-5 lg:ml-10 m-2 rounded-lg hover:bg-blue-100 hover:text-blue-800 ">Home</Link>
        <Link to={"/about"} className="inline-block py-1 px-5 m-2  rounded-lg hover:bg-blue-100 hover:text-blue-800 ">About</Link>
        <Link to={"/projects"} className="inline-block py-1 px-5 m-2 rounded-lg hover:bg-blue-100 hover:text-blue-800 ">Projects</Link>

      
      </div>
    </>
};
export default NavbarComponent;
