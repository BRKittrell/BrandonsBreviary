import React from "react";
import {Link} from "react-router-dom";

const Navbar = () =>{
return(
    <>
<div className="navbardiv">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/videos">Videos</Link>
</div>
</>
)
}

export default Navbar