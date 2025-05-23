import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./HomeSection.css";

export default function HomeSection() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">BOJAN JANKOV</h1>
        <h2 className="subtitle">FULL STACK SOFTWARE DEVELOPER</h2>
        <p className="description">
          I’m a passionate full-stack software developer dedicated to creating
          innovative and dynamic websites and applications. With a keen eye for
          detail and efficient code, I’m constantly working on new projects to
          expand my portfolio and push the boundaries of web development. Feel
          free to explore my Projects section, where you’ll find a collection of
          my latest work. Whether you’re here to check out my creations or just
          want to learn more about me, I’d love for you to take a look around.
        </p>
        <div className="button-group">
          <a href="/contact">
            <button className="contact-btn">Contact Me</button>
          </a>
          <a href="/CV-BojanJankov.pdf" download>
            <button className="cv-btn">
              CV <i className="fa-solid fa-download"></i>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/bojan-jankov-92aba1316/"
            className="linkedin"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/BojanJankov" className="github">
            <FaGithub />
          </a>
        </div>
        <div className="social-links"></div>
      </div>
      <div className="image-container">
        <img
          src="/about-me-profile-img.JPG"
          alt="Bojan Jankov"
          className="profile-pic"
        />
      </div>
    </div>
  );
}
