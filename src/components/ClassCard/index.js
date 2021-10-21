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
        >
          BOOK NOW
        </a>
      </div>
    </div>
  );
};

export default ClassCard;
