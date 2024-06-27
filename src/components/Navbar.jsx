import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <Link className="navbar-brand" to='/'>
         <img className="guvi" src="https://play-lh.googleusercontent.com/CLgcmJ7TRmQIGBy8f8KBN1BDHbpmerwj_fgEriggjhaUIYO4mnfTHjqdF1d0ZNy1ziw=w240-h480-rw" alt="img"  /><h4>Guvi</h4>
       </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active"> {/* className="nav-link"*/  }
              <Link to='/'>All</Link>
            </li>
            <li className="nav-item">
            <Link to='/Fullstack'>Full Stack Development</Link>
            </li>
            <li className="nav-item">
            <Link to='/DataScience'>Data Science</Link>
            </li>
            <li className="nav-item">
            <Link to='/CyberSecurity'>Cyber Security</Link>
            </li>
            <li className="nav-item">
            <Link to='/Career'>Career</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
