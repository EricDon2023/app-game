import React from "react";
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <div className="header-app sticky-top">
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid custom-container">
          <a className="navbar-brand color-text-nav" href="/#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <FaBars/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto color-text-nav">
            <li className="nav-item">
              <Link to="/"className="nav-link mx-2 color-text-nav">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about"className="nav-link mx-2 color-text-nav">About</Link>
            </li>
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav mx-auto color-text-nav">
              <li className="nav-item">
                <Link to="/login"className="nav-link mx-2 color-text-nav">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register"className="nav-link mx-2 color-text-nav">Register</Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
