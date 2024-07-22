import "./Projcets.css";

function Projcets() {
  return (
    <div id="Projcets">
      <div className="projects-heading-container">
        <h1>My projcets</h1>
      </div>
      <div className="projects-div-container">
        <a href="#" className="card">
          <img
            src="../../../src/assets/portfolio-photos/e-store-app-image.png"
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

        <a href="#" className="card">
          <img
            src="../../../src/assets/portfolio-photos/packing-app.png"
            alt="balloon with an emoji face"
            className="card__img"
          />
          <span className="card__footer">
            <span>Packing App</span>
            <span>React + TypeScript with Redux</span>
          </span>
          <span className="card__action">
            <svg viewBox="0 0 448 512">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            </svg>
          </span>
        </a>

        <a href="#" className="card">
          <img
            src="../../../src/assets/portfolio-photos/mini-projects-image.jpg"
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
      </div>
    </div>
  );
}

export default Projcets;
