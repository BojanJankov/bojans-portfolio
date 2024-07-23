import "./Projcets.css";

function Projcets() {
  return (
    <div id="Projcets">
      <div className="projects-heading-container">
        <h1>My projcets</h1>
      </div>
      <div className="projects-div-container">
        <a
          href="https://github.com/BojanJankov/E-Store-App"
          target="_blank"
          className="card"
        >
          <img
            src="https://scontent.fskp1-2.fna.fbcdn.net/v/t1.15752-9/451877912_1701811907313780_1116230338005259416_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=7wDnSz4b1JEQ7kNvgFUTWEk&_nc_ht=scontent.fskp1-2.fna&oh=03_Q7cD1QHFzxvImbiuWC5cpzrrz75tlKEKDqFyHVdByI1-tRLrLg&oe=66C79806"
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
          href="https://github.com/BojanJankov/Packing-App"
          target="_blank"
          className="card"
        >
          <img
            src="https://scontent.fskp1-2.fna.fbcdn.net/v/t1.15752-9/450516788_529086402880973_7072801944577014204_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_ohc=8eMmLcu_GjcQ7kNvgE6Ftoo&_nc_ht=scontent.fskp1-2.fna&oh=03_Q7cD1QEE8Fc0vDT7fM9EwOMXJeaqRWTWxmECF6VoZDge4rsKeg&oe=66C7B254"
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

        <a
          href="https://github.com/BojanJankov/My-mini-projects"
          target="_blank"
          className="card"
        >
          <img
            src="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg"
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
