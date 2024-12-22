import { motion } from "framer-motion";
import "./HomeSection.css";

function HomeSection() {
  const text =
    `Hello, I am Bojan Jankov, full-stack web developer who is currently
          working on his own projects and building his portfolio of fantastic
          websites and applications. If you want to see them, checkout projects section and see them and get to know me better.`.split(
      " "
    );
  return (
    <section className="HomeSection">
      <div className="home-section-main-container">
        <div className="home-section-text-div">
          <h1 className="home-section-text-heading">BOJAN JANKOV</h1>
          <h3 className="home-section-text-heading-h3">
            FULL STACK WEB DEVELOPER
          </h3>
          <p>
            {text.map((el, i) => (
              <motion.span
                className="home-section-text-paragraph"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.15,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>
          <div className="home-section-text-links">
            <a href="/about">
              <button className="about-me-button">More about me</button>
            </a>
            <a href="https://amethyst-garnet-22.tiiny.site/">
              <button className="docs-button">CV</button>
            </a>
            <a href="https://www.linkedin.com/in/bojan-jankov-92aba1316/">
              <button className="docs-button">
                <i className="fa-brands fa-linkedin"></i>
              </button>
            </a>
            <a href="https://github.com/BojanJankov">
              <button className="docs-button">
                <i className="fa-brands fa-github"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="home-section-image-container">
          <div className="home-section-image-div">
            <img src="/profile-image.jpg" alt="My photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
