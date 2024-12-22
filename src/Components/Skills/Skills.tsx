import "./Skills.css";

function Skills() {
  return (
    <section id="Skills">
      <h1>SKILLS / TEHNOLOGIES</h1>
      <div className="skills-div-container">
        <div className="general-container">
          <div>
            <h3>Personal skills:</h3>
          </div>
          <div className="cards-container">
            <div>Fast learner</div>
            <div>Problem solving</div>
            <div>Teamwork</div>
            <div>Time Management</div>
            <div>Positivity</div>
            <div>Communication</div>
            <div>Critical Thinking</div>
            <div>Computer proficiency</div>
          </div>
        </div>
        <div className="front-end-container">
          <div>
            <h3>Front-end tehnologies:</h3>
          </div>
          <div className="cards-container">
            <div>HTML5</div>
            <div>CSS3</div>
            <div>JavaScript</div>
            <div>TypeScript</div>
            <div>React</div>
            <div>Angular</div>
            <div>Bootstrap</div>
            <div>Framer Motion</div>
            <div>Tailwind CSS</div>
            <div>SASS</div>
            <div>Material UI</div>
          </div>
        </div>
        <div className="back-end-container">
          <div>
            <h3>Back-end tehnologies:</h3>
          </div>
          <div className="cards-container">
            <div>Node.js</div>
            <div>Express.js</div>
            <div>NestJS</div>
          </div>
        </div>
        <div className="database-container">
          <div>
            <h3>Databases:</h3>
          </div>
          <div className="cards-container">
            <div>PostgreSQL</div>
            <div>MongoDB</div>
            <div>TypeORM</div>
            <div>Firebase</div>
          </div>
        </div>
        <div className="general-container">
          <div>
            <h3>General:</h3>
          </div>
          <div className="cards-container">
            <div>VSCode</div>
            <div>Git</div>
            <div>Github</div>
            <div>Slack</div>
            <div>Postman</div>
            <div>Swagger</div>
            <div>Dbeaver</div>
            <div>Taiga</div>
            <div>Docker</div>
            <div>Netlify</div>
            <div>Vercel</div>
            <div>Render</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
