import { motion } from "framer-motion";
import "./HomeSection.css";

function HomeSection() {
  const text =
    `I’m a passionate full-stack web developer dedicated to creating innovative and  dynamic websites and applications. With a keen eye for detail and efficient code, I’m constantly working on new projects  to expand my portfolio and push the boundaries of web development.
Feel free to explore my Projects section, where you’ll find a collection of my latest work. Whether you’re here to check out my creations or just want to learn more about me, I’d love for you to take a look around.`.split(
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
                  duration: 0.1,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>
          <div className="home-section-text-links">
            <a href="/contact">
              <button className="about-me-button">Contact me</button>
            </a>
            <a href="/CV-BojanJankov.pdf" download>
              <button className="about-me-button desktop">
                Download CV <i className="fa-solid fa-download"></i>
              </button>
            </a>
            <a href="/CV-BojanJankov.pdf" download>
              <button className="docs-button mobile">
                <i className="fa-solid fa-download"></i>
              </button>
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
            <img src="/about-me-profile-img.JPG" alt="My photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
