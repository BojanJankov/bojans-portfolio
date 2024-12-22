import "./Projcets.css";

function Projcets() {
  return (
    <div id="Projcets">
      <div className="projects-heading-container">
        <h1>MY PROJECTS</h1>
      </div>
      <div className="projects-div-container">
        <a
          href="https://github.com/BojanJankov/thought-exchange-app"
          target="_blank"
          className="card"
        >
          <img
            src="/exchange-app.png"
            alt="balloon with an emoji face"
            className="card__img"
          />
          <span className="card__footer">
            <span>Thought exchange app</span>
            <span>Angular/Express/MongoDB/Firebase</span>
          </span>
          <span className="card__action">
            <svg viewBox="0 0 448 512">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            </svg>
          </span>
        </a>
        <a
          href="https://github.com/BojanJankov/E-Store-App"
          target="_blank"
          className="card"
        >
          <img
            src="/e-store-img.png"
            alt="balloon with an emoji face"
            className="card__img"
          />
          <span className="card__footer">
            <span>E-store App</span>
            <span>React + TypeScript/NestJS/PostgreSQL w/TypeORM</span>
          </span>
          <span className="card__action">
            <svg viewBox="0 0 448 512">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            </svg>
          </span>
        </a>
        <a
          href="https://github.com/BojanJankov/tech-blog"
          target="_blank"
          className="card"
        >
          <img
            src="/tech-blog.png"
            alt="balloon with an emoji face"
            className="card__img"
          />
          <span className="card__footer">
            <span>Tech Sphere Blog</span>
            <span>Angular/NestJS/PostgreSQL w/TypeORM</span>
          </span>
          <span className="card__action">
            <svg viewBox="0 0 448 512">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            </svg>
          </span>
        </a>
        <a
          href="https://github.com/BojanJankov/job-seeker-app"
          target="_blank"
          className="card"
        >
          <img
            src="/job-seeker-app.png"
            alt="balloon with an emoji face"
            className="card__img"
          />
          <span className="card__footer">
            <span>Job Seeker App</span>
            <span>Angular/NestJS/PostgreSQL w/TypeORM </span>
          </span>
          <span className="card__action">
            <svg viewBox="0 0 448 512">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            </svg>
          </span>
        </a>

        <a
          href="https://github.com/BojanJankov/My-mini-projects"
          target="_blank"
          className="card"
        >
          <img
            src="/projects-image.jpg"
            alt="balloon with an emoji face"
            className="card__img"
          />
          <span className="card__footer">
            <span>Mini projcets</span>
            <span>Lot of projcets with Vanilla Js, NestJS and Express.js</span>
          </span>
          <span className="card__action">
            <svg viewBox="0 0 448 512">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            </svg>
          </span>
        </a>
        <a
          href="https://github.com/BojanJankov/Packing-App"
          target="_blank"
          className="card"
        >
          <img
            src="/packing-app.png"
            alt="balloon with an emoji face"
            className="card__img"
          />
          <span className="card__footer">
            <span>Packing App</span>
            <span>React + TypeScript</span>
          </span>
          <span className="card__action">
            <svg viewBox="0 0 448 512">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Projcets;
