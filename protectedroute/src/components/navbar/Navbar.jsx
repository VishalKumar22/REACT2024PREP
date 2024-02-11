import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user, login, logout }) {
  return (
    <>
      <div className="main">
        <div className="left">
          <h1 className="logo_text">Navbar</h1>
        </div>
        <div className="right">
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/product"}>Product</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
            {user ? (
              <button onClick={logout}>logout</button>
            ) : (
              <button onClick={login}>login</button>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
