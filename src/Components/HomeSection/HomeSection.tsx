import { motion } from "framer-motion";
import "./HomeSection.css";

function HomeSection() {
  const text =
    `Hello, I am Bojan Jankov, full-stack web developer who is currently
          working on his own projects and building his portfolio of fantastic
          websites and apps. If you want to see them, scroll down to the
          projects section and see them and get to know me better.`.split(" ");
  return (
    <section className="HomeSection">
      <div className="home-section-text-div">
        <h1 className="home-section-text-heading">Bojan Jankov</h1>
        <h3 className="home-section-text-heading-h3">
          Full Stack JavaScript developer
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
          <a href="https://bojanjankov-cv.tiiny.site/">
            <button className="cv-button">
              <i className="fa-regular fa-file"></i>
            </button>
          </a>

          <a href="https://www.linkedin.com/in/bojan-jankov-92aba1316/">
            <button className="linkedin-button">
              <i className="fa-brands fa-linkedin"></i>
            </button>
          </a>
          <a href="https://github.com/BojanJankov">
            <button className="github-button">
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
    </section>
  );
}

export default HomeSection;
