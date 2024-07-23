import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="navbar-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#AboutMe">About</a>
        </li>
        <li>
          <a href="#Projcets">Projects</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
