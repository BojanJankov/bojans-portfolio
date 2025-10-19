import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-container">
        <div className="image-section"></div>
        <div className="text-section">
          <h2>ABOUT ME</h2>
          <h3>
            <span className="highlight">Full Stack Software developer</span>
          </h3>
          <p>
            After finishing high school, I decided to fulfill my dream of
            becoming a software developer. I enrolled in a programming academy,
            where I studied full-stack software development and honed my skills
            in building modern websites and applications. I have always loved
            tackling complex problems and finding creative solutions, which
            fuels my passion for coding. As a dedicated and enthusiastic
            individual, I constantly seek opportunities to learn, improve, and
            explore new technologies. The ever-evolving world of tech excites
            me, and I thrive on the challenge of mastering new skills and
            pushing my limits. Beyond coding, I stay active by working out at
            the gym and enjoying sports in my free time. I believe in
            maintaining a balance between mind and body, as both are essential
            for growth and success.
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/jankovbojan/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="linkedin.com/in/bojan-jankov-92aba1316">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/BojanJankov">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100005079098430">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <h3>
            <span className="highlight">Work Experience</span>
          </h3>

          <div className="work-experience-list">
            <div className="work-experience-card">
              <div className="work-experience-logo">
                <img
                  src="/avenga-logo.png"
                  alt="Avenga Academy"
                  style={{ width: "32px", height: "32px" }}
                />
              </div>
              <div className="work-experience-details">
                <span className="work-experience-role">Assistant Lecturer</span>
                <span className="work-experience-company">
                  Avenga Academy - Part time
                </span>
                <span className="work-experience-date">Nov 2024 - Present</span>
              </div>
            </div>
            <div className="work-experience-card">
              <div className="work-experience-logo">
                <img
                  src="/digital-fox.jpg"
                  alt="The Digital Fox"
                  style={{ width: "32px", height: "32px" }}
                />
              </div>
              <div className="work-experience-details">
                <span className="work-experience-role">
                  Full Stack Software Developer
                </span>
                <span className="work-experience-company">
                  The Digital Fox - Full time
                </span>
                <span className="work-experience-date">Jun 2025 - Present</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
