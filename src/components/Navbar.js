import React from "react";
import {Link} from "react-router-dom";

const Navbar = () =>{
return(
    <>
<div className="navbardiv">
        <Link to="/" className="navbarLink">Home</Link>
        <Link to="/about" className="">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/visitors">Visitors</Link>
</div>
</>
)
}

export default Navbar