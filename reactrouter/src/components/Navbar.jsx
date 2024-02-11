import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='main'>
      <div className="left">
        <h1 className='logo_text'>Navbar</h1>
      </div>
      <div className="right">
        <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/blog"}>Blog</Link>
        </ul>
      </div>

    </div>
  )
}

export default Navbar