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
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ABOUT ME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            SKILLS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
      <HamburgerMenu />
    </nav>
  );
}

export default Navbar;
