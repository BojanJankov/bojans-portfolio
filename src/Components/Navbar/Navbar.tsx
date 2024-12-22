import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logo-div">
        <h2>BOJAN'S PORTFOLIO</h2>
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
    </nav>
  );
}

export default Navbar;
