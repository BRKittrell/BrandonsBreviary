import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <h1 className="heading">Brandon's Breviary</h1>
      </div>
      <div className="navbardiv">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="resume" className="navLink">
          Resume
        </Link>
        <Link to="/contact" className="navLink">
          Contact
        </Link>
        <Link to="/play" className="navLink">
          Play
        </Link>
        <Link to="/projects" className="navLink">
          Projects
        </Link>
        <Link to="/videos" className="navLink">
          Videos
        </Link>
        <Link to="/visitors" className="navLink">
          Visitors
        </Link>
      </div>
    </>
  );
};

export default Navbar;
