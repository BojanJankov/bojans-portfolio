import "./HomeSection.css";

function HomeSection() {
  return (
    <section className="HomeSection">
      <div className="home-section-text-div">
        <h1 className="home-section-text-heading">Bojan Jankov</h1>
        <h3 className="home-section-text-heading-h3">
          Full Stack JavaScript developer
        </h3>
        <p className="home-section-text-paragraph">
          Hello, I'am Bojan Jankov, full-stack web developer who is currently
          working on his own projects and building his portfolio of fantastic
          websites and apps. If you want to see them, scroll down to the
          projects section and see them and get to know me better.
        </p>
        <div className="home-section-text-links">
          <a href="../../../src/assets/files/Bojan Jankov CV.pdf">
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
          <img
            src="https://scontent.fskp1-2.fna.fbcdn.net/v/t1.15752-9/448910698_2216529958697379_1390753380354295044_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=IKwCUBIwy_YQ7kNvgGuNmDA&_nc_ht=scontent.fskp1-2.fna&oh=03_Q7cD1QF1MbkiYV9X_3x4OV1RGIPRU7X-MuahnXRluFwDOyJFrA&oe=66C78E87"
            alt="My photo"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
