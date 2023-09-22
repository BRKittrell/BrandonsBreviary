import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaLinkedin, FaYoutube, FaGithubSquare } from 'react-icons/fa'


const Layout = () => {
  return (
    <>
      <div className="headingDiv">
        <Navbar />
      </div>
      <div id="iconDiv">
      {/* <a href="mailto:brandon.kittrell@outlook.com"><MdOutlineMailOutline className="icon">...</MdOutlineMailOutline></a>
      <a href="https://www.linkedin.com/in/brandon-kittrell/" target="_blank"><FaLinkedin className="icon">...</FaLinkedin></a> */}
      {/* <a href="https://www.youtube.com/channel/UC-0Si-TWcB06I6qkmGeTzaQ" target="_blank"><FaYoutube className="icon">...</FaYoutube></a> */}
      {/* <a href="https://github.com/BRKittrell" target="_blank"><FaGithubSquare className="icon">...</FaGithubSquare></a> */}
      </div>
      <Outlet/>
    </>
  );
};

export default Layout;
