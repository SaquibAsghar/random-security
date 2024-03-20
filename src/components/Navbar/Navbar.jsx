import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

const Navbar = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Home />
      </div>
    </>
  );
};

export default Navbar;
