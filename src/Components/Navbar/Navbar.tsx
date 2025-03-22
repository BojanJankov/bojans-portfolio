// import { useState } from "react";
import "./Navbar.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logo-div">
        <a href="/">
          <h2>BOJAN'S PORTFOLIO</h2>
        </a>
      </div>
      <ul className="navbar-list">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <HamburgerMenu />
    </nav>
  );
}

export default Navbar;
