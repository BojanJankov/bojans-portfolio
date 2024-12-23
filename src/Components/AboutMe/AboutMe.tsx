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
              After finishing high school I decided to fulfill my dream and
              become a developer. I enrolled in a programming academy and
              studied full-stack web development. I have always loved to solve
              the problems and challenges that are given to me and create
              solutions for them. I am dedicated and passionate individual who
              is always ready to learn and master new things and skills as well
              as trying out new technologies and self-improvement. Always ready
              for new things in the world of technology. In my free time, I
              usually work out in the gym and watch sports.
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
