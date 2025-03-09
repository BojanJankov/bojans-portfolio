import "./AboutMe.css";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const aboutVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

function AboutMe() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div id="AboutMe">
      <h1>ABOUT ME</h1>
      <motion.div
        className="about-me-container"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={aboutVariants}
      >
        <div className="about-me-text-container">
          <div className="about-me-text-div square">
            <h2>PROFILE</h2>
            <p>
              After finishing high school, I decided to fulfill my dream of
              becoming a developer. I enrolled in a programming academy, where I
              studied full-stack web development and honed my skills in building
              modern websites and applications. I have always loved tackling
              complex problems and finding creative solutions, which fuels my
              passion for coding. As a dedicated and enthusiastic individual, I
              constantly seek opportunities to learn, improve, and explore new
              technologies. The ever-evolving world of tech excites me, and I
              thrive on the challenge of mastering new skills and pushing my
              limits. Beyond coding, I stay active by working out at the gym and
              enjoying sports in my free time. I believe in maintaining a
              balance between mind and body, as both are essential for growth
              and success.
            </p>
          </div>
        </div>
        <div className="about-me-info-container">
          <div className="education-container">
            <h3>CERTIFICATIONS</h3>
            <div>
              <ul>
                <li>
                  CPD Certificate from Qinshift Academy - ACADEMY OF PROGRAMMING
                </li>
              </ul>
            </div>
          </div>
          <div className="languages-container">
            <h3>LANGUAGES</h3>
            <div>
              <ul>
                <li>Macedonian (Fluent)</li>
                <li>English (Fluent)</li>
                <li>Serbo-croatian (Intermediate)</li>
                <li>German (Basics)</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
