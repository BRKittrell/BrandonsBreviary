import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div className="headingDiv">
        <h1 className="heading">Brandon's Resume</h1>
        <Navbar />
      </div>
      <div>
      </div>
      <Outlet/>
    </>
  );
};

export default Layout;
