import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="titleAndNavbar">
        <h1 className="heading">Brandon's Breviary</h1>
      <div className="navbardiv">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="resume" className="navLink">
          Resume
        </Link>
        {/* <Link href="mailto:email@example.com" to="/contact" className="navLink">
          Email Me
        </Link> */}
        <Link to="/projects" className="navLink">
          Projects
        </Link>
        <Link to="/videos" className="navLink">
          Videos
        </Link>
        <Link to="/joke" className="navLink">
          Laugh
        </Link>
        <Link to="/play" className="navLink">
          Play
        </Link>
        {/* <Link to="/visitors" className="navLink">
          Visitors
        </Link> */}
      </div>
      </div>
    </>
  );
};

export default Navbar;
