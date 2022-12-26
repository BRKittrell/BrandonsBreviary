import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div className="headingDiv">
        <Navbar />
      </div>
      <div>
      </div>
      <Outlet/>
    </>
  );
};

export default Layout;
