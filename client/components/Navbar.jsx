import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div id='logo'>
        <Link to='/'>Logo</Link>
      </div>
      <div id='nav'>
        <Link to='/'>Home</Link>
        <Link to='/game'>Play</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
    </div>
  )
};

export default Navbar;