// import { useState } from "react";
import "./Navbar.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toogleHamburger = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className="Navbar">
      <div className="logo-div">
        <a href="/">
          <h2>BOJAN'S PORTFOLIO</h2>
        </a>
      </div>
      <ul className="navbar-list">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT ME</a>
        </li>
        <li>
          <a href="/projects">PROJCETS</a>
        </li>
        <li>
          <a href="/skills">SKILLS</a>
        </li>
        <li>
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
      <HamburgerMenu />
      {/* <div className="hamburger-menu">
        <i className="fa-solid fa-bars" onClick={toogleHamburger}></i>
        {isOpen && (
          <div className="navigation">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/about">ABOUT ME</a>
              </li>
              <li>
                <a href="/projects">PROJCETS</a>
              </li>
              <li>
                <a href="/skills">SKILLS</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </div>
        )}
      </div> */}
    </nav>
  );
}

export default Navbar;
