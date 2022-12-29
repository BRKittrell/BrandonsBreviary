import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () =>{
  
    
    return(
        <>
        <h1>Uh.... There's nothing here...</h1>
        <Link to="/">
        <button>Go home, you're drunk.</button>
        </Link>
        </>
    )
}

export default PageNotFound