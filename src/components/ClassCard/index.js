import { FaFacebook } from "react-icons/fa";

import "./ClassCard.css";
import "../../App.css";

const ClassCard = (props) => {
  return (
    <div className="class-card">
      <img src={props.url} alt={props.alt} className="class-image" />
      <div className="card-body">
        <a
          href="https://latinmotion.as.me/schedule.php"
          className="class-book-btn"
          target="_blank"
          rel="noreferrer"
        >
          BOOK NOW
        </a>
        {props.facebook && (
          <a
            className="logo-container"
            href={props.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size="50" color="#1870E5" className="fbook-logo" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ClassCard;
