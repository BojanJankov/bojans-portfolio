import { useState } from "react";
import "./Projcets.css";

const clientProjects = [
  {
    id: 1,
    title: "Мудрост",
    description:
      "The project is made for a client – an accounting company. It presents all the client's provided data, including all necessary pages with information such as services, notifications, and contact details. There are forms through which the client can be contacted, as well as a page for consultations. ",
    image: "/mudrost.png",
    stack: ["Angular", "TypeScript", "SCSS", "Localization i18n", "EmailJS"],
    link: "https://www.mudrost.mk",
  },
];

const personalProjects = [
  {
    id: 1,
    title: "Thought exchange",
    description:
      "Thought exchange app is a simple web blog application that allows users to view and manage posts. It provides features for adding new posts, viewing details of posts, leave comments and like or dislike others posts. Also they can't do all of this if they don't have an account and are not loged in.",
    image: "/exchange-app.png",
    stack: ["Angular", "TypeScript", "Firebase", "Express", "MongoDB"],
    link: "https://github.com/BojanJankov/thought-exchange-app",
  },
  {
    id: 2,
    title: "E-store Application",
    description:
      "E-store app is a web application that allows users to view and manage products in the E-store app. It provides features for adding new products, viewing details of products, seraching them and add to cart with as much quntity they like, also can create order with products they add to the cart. Also they can register an account and login with it and work with features.",
    image: "/e-store-img.png",
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "TypeORM"],
    link: "https://github.com/BojanJankov/E-Store-App",
  },
  {
    id: 3,
    title: "Tech Sphere Blog",
    description:
      "Tech Sphere is tech blog that allows people to view and read all newest informations about world of technology and technology staff. This blog is created for all people that like and enjoy reading about technology and shere every information about it. This blog provides features for adding and viewing posts, leave comments and rating as well as subscribe for notifications.",
    image: "/tech-blog.png",
    stack: ["Angular", "TypeScript", "NestJS", "PostgreSQL", "TypeORM"],
    link: "https://github.com/BojanJankov/tech-blog",
  },
  {
    id: 4,
    title: "Job Seeker Application",
    description:
      "Job Seeker app is a simple web application that allows users to view and manage jobs and applay for them. It provides features for adding new jobs, viewing details of jobs and their comapnies, seraching and filter them. Also they can't do all of this if they don't have an account and are not loged in.",
    image: "/job-seeker-app.png",
    stack: [
      "Angular",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
    ],
    link: "https://github.com/BojanJankov/job-seeker-app",
  },
  {
    id: 5,
    title: "Packing Application",
    description:
      "This is mini Packing App that will help you prepare before your next trip. With this application you will be able to choose all your necessary items, choose your destination and enter your personal informations.",
    image: "/packing-app.png",
    stack: ["React", "TypeScript", "Redux"],
    link: "https://github.com/BojanJankov/Packing-App",
  },
  {
    id: 6,
    title: "Cars market Application",
    description:
      "Cars app is a web application that allows clients to view and manage cars in the Cars app. It provides features for adding, viewing, seraching and order cars, as well they can register an account and login with it, and then working with the cars.",
    image: "/cars-app.png",
    stack: [
      "React",
      "JavaScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
    ],
    link: "https://github.com/BojanJankov/cars-app-project",
  },
  {
    id: 7,
    title: "Gym Membership Application",
    description:
      "Gym Membership App is web application for gyms and fitness centers. In this application gym owner can add and display all trainers, plans and staff for thier gym and all people can see that and consider getting involved. This gym membership app is created for all gym owners that like good membership management and good marketing for thier gym.",
    image: "/gym.png",
    stack: [
      "Angular",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      " TypeORM",
    ],
    link: "https://github.com/BojanJankov/gym-membership-app",
  },
  {
    id: 8,
    title: "QR code generator",
    description:
      "Simple QR code generator, where you can put your link and generate a free QR code.",
    image: "/qr.png",
    stack: ["React", "TypeScript"],
    link: "https://github.com/BojanJankov/qr-code-generator",
  },
  {
    id: 9,
    title: "Issue tracker",
    description:
      "Basic issue tracker with basic crud operations where you can read, add, update and delete issues.",
    image: "/issue.png",
    stack: ["Angular", "TypeScript"],
    link: "https://github.com/BojanJankov/My-mini-projects/tree/main/Angular/issue-tracker",
  },
  {
    id: 10,
    title: "Weather app",
    description:
      "Simple weather app with amazing UI where you can search and find out weather based on city",
    image: "/weather-app.png",
    stack: ["React", "JavaScript"],
    link: "https://github.com/BojanJankov/My-mini-projects/tree/main/React/react-weather-app",
  },

  {
    id: 11,
    title: "Vanilla JavaScript projects",
    description:
      "A lot of vanilla javascript projects such as todo app, movie website, remainder app, starwars app and more.",
    image: "/projects-image.jpg",
    stack: ["JavaScript", "HTML5", "CSS3"],
    link: "https://github.com/BojanJankov/My-mini-projects/tree/main/VanillaJS",
  },
];

const Projcets = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const projects = activeTab === "client" ? clientProjects : personalProjects;

  return (
    <div className="projects-container">
      <nav className="projects-nav">
        <button
          className={activeTab === "client" ? "active" : ""}
          onClick={() => setActiveTab("client")}
        >
          Client Projects
        </button>
        <button
          className={activeTab === "personal" ? "active" : ""}
          onClick={() => setActiveTab("personal")}
        >
          Personal Projects
        </button>
      </nav>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-stack">
              {project.stack.map((tech, index) => (
                <span key={index} className="stack-item">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projcets;
// return (
//   <div id="Projcets">
//     <div className="projects-heading-container">
//       <h1>MY PROJECTS</h1>
//     </div>
//     <div className="projects-div-container">
//       <a
//         href="https://github.com/BojanJankov/thought-exchange-app"
//         target="_blank"
//         className="card"
//       >
//         <img
//           src="/exchange-app.png"
//           alt="balloon with an emoji face"
//           className="card__img"
//         />
//         <span className="card__footer">
//           <span>Thought exchange app</span>
//           <span>Angular/Express/MongoDB/Firebase</span>
//         </span>
//         <span className="card__action">
//           <svg viewBox="0 0 448 512">
//             <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
//           </svg>
//         </span>
//       </a>
//       <a
//         href="https://github.com/BojanJankov/E-Store-App"
//         target="_blank"
//         className="card"
//       >
//         <img
//           src="/e-store-img.png"
//           alt="balloon with an emoji face"
//           className="card__img"
//         />
//         <span className="card__footer">
//           <span>E-store App</span>
//           <span>React + TypeScript/NestJS/PostgreSQL w/TypeORM</span>
//         </span>
//         <span className="card__action">
//           <svg viewBox="0 0 448 512">
//             <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
//           </svg>
//         </span>
//       </a>
//       <a
//         href="https://github.com/BojanJankov/tech-blog"
//         target="_blank"
//         className="card"
//       >
//         <img
//           src="/tech-blog.png"
//           alt="balloon with an emoji face"
//           className="card__img"
//         />
//         <span className="card__footer">
//           <span>Tech Sphere Blog</span>
//           <span>Angular/NestJS/PostgreSQL w/TypeORM</span>
//         </span>
//         <span className="card__action">
//           <svg viewBox="0 0 448 512">
//             <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
//           </svg>
//         </span>
//       </a>
//       <a
//         href="https://github.com/BojanJankov/job-seeker-app"
//         target="_blank"
//         className="card"
//       >
//         <img
//           src="/job-seeker-app.png"
//           alt="balloon with an emoji face"
//           className="card__img"
//         />
//         <span className="card__footer">
//           <span>Job Seeker App</span>
//           <span>Angular/NestJS/PostgreSQL w/TypeORM </span>
//         </span>
//         <span className="card__action">
//           <svg viewBox="0 0 448 512">
//             <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
//           </svg>
//         </span>
//       </a>
//       <a
//         href="https://github.com/BojanJankov/My-mini-projects"
//         target="_blank"
//         className="card"
//       >
//         <img
//           src="/projects-image.jpg"
//           alt="balloon with an emoji face"
//           className="card__img"
//         />
//         <span className="card__footer">
//           <span>Mini projcets</span>
//           <span>Lot of projcets with Vanilla Js, NestJS and Express.js</span>
//         </span>
//         <span className="card__action">
//           <svg viewBox="0 0 448 512">
//             <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
//           </svg>
//         </span>
//       </a>
//       <a
//         href="https://github.com/BojanJankov/Packing-App"
//         target="_blank"
//         className="card"
//       >
//         <img
//           src="/packing-app.png"
//           alt="balloon with an emoji face"
//           className="card__img"
//         />
//         <span className="card__footer">
//           <span>Packing App</span>
//           <span>React + TypeScript</span>
//         </span>
//         <span className="card__action">
//           <svg viewBox="0 0 448 512">
//             <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
//           </svg>
//         </span>
//       </a>
//     </div>
//   </div>
// );
