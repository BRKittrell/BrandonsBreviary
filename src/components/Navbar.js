import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaLinkedin, FaYoutube, FaGithubSquare } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <div className="titleAndNavbar">
        <h1 className="heading">Brandon's Breviary</h1>
      <div className="navbardiv">
        <a href="mailto:brandon.kittrell@outlook.com"><MdOutlineMailOutline className="icon">...</MdOutlineMailOutline></a>
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="resume" className="navLink">
          Resume
        </Link>
        <Link to="DegreeAndCertificate" className="navLink">
          Education/Certificates
        </Link>
      <a href="https://www.linkedin.com/in/brandon-kittrell/" target="_blank"><FaLinkedin className="icon">...</FaLinkedin></a>

           </div>
      </div>
    </>
  );
};

export default Navbar;
