import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div className="headingDiv">
        <h1 className="heading">The PERN Pit</h1>
      </div>
      <div>
        <Navbar />
      </div>
      <Outlet/>
    </>
  );
};

export default Layout;
