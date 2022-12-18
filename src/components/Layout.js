import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div className="headingDiv">
        <h1 className="heading">Brandon's Resume</h1>
      </div>
      <div>
        <Navbar />
      </div>
    </>
  );
};

export default Layout;
