import React from "react";
import {Link} from "react-router-dom";

const Navbar = () =>{
return(
    <>
<div className="navbardiv">
<div>
<h1 className="heading">Brandon's Resume</h1>
</div>
        <Link to="/" className="navLink">Home</Link>
        <Link to="/about" className="navLink">About</Link>
        <Link to="/blog" className="navLink">Blog</Link>
        <Link to="/contact" className="navLink">Contact</Link>
        <Link to="/projects" className="navLink">Projects</Link>
        <Link to="/videos" className="navLink">Videos</Link>
        <Link to="/visitors" className="navLink">Visitors</Link>
</div>
</>
)
}

export default Navbar