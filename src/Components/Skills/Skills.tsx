import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaSass,
  FaAngular,
  FaBootstrap,
  FaGithub,
  FaSlack,
  FaGit,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiSwagger,
  SiDbeaver,
  SiVercel,
  SiRender,
  SiFramer,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { MdOutlinePostAdd } from "react-icons/md";

const iconMap: Record<string, JSX.Element> = {
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  JavaScript: <FaJs />,
  PHP: <FaPhp />,
  React: <FaReact />,
  NodeJs: <FaNodeJs />,
  SASS: <FaSass />,
  TypeScript: <SiTypescript />,
  Express: <SiExpress />,
  NestJS: <SiNestjs />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  Swagger: <SiSwagger />,
  DBeaver: <SiDbeaver />,
  // Taiga: <SiTaiga />,
  Vercel: <SiVercel />,
  Render: <SiRender />,
  Angular: <FaAngular />,
  Bootstrap: <FaBootstrap />,
  // "Material UI": <SiMaterialui />,
  "Framer Motion": <SiFramer />,
  VSCode: <TbBrandVscode />,
  Git: <FaGit />,
  Github: <FaGithub />,
  Slack: <FaSlack />,
  Postman: <MdOutlinePostAdd />,
  Docker: <FaDocker />,
};

const skillsData = [
  {
    category: "Personal skills",
    skills: [
      "Fast learner",
      "Problem solving",
      "Teamwork",
      "Time Management",
      "Positivity",
      "Communication",
      "Critical Thinking",
      "Computer proficiency",
    ],
  },
  {
    category: "Front-end technologies",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Bootstrap",
      "Framer Motion",
      "Tailwind CSS",
      "SASS",
      "Material UI",
    ],
  },
  {
    category: "Back-end technologies",
    skills: ["Node.js", "Express.js", "NestJS"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "TypeORM", "Firebase"],
  },
  {
    category: "General",
    skills: [
      "VSCode",
      "Git",
      "Github",
      "Slack",
      "Postman",
      "Swagger",
      "Dbeaver",
      "Taiga",
      "Docker",
      "Netlify",
      "Vercel",
      "Render",
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-container">
      <h2 className="skills-heading">SKILLS / TECHNOLOGIES</h2>
      <div className="skills">
        {skillsData.map((group, index) => (
          <div key={index} className="skills-group">
            <h3>{group.category}:</h3>
            <div className="skills-list">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  {iconMap[skill] && (
                    <span className="skill-icon">{iconMap[skill]}</span>
                  )}{" "}
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
