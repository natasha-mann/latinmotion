import { useState } from "react";

import ClassCard from "../../components/ClassCard";
import FlexContainer from "../../components/FlexContainer";
import Title from "../../components/Title";
import "./Classes.css";

import jayneSaturday from "../../images/jayne-saturday.jpeg";
import privateClass from "../../images/private-class.jpeg";
import saturdayOpen from "../../images/saturday-open.jpeg";
import zoomSaturday from "../../images/zoom-saturday.jpeg";

const Classes = () => {
  const [displayVenues, setDisplayVenues] = useState("displayed");
  const [displayClasses, setDisplayClasses] = useState("hidden");
  const [classes, setClasses] = useState([]);

  const classData = [
    {
      url: jayneSaturday,
      alt: "Jayne Turpin Ladies Styling Class",
      location: "bearwood",
    },
    {
      url: privateClass,
      alt: "Mauricio Reyes Private Classes",
      location: "bearwood",
    },
    {
      url: privateClass,
      alt: "Mauricio Reyes Private Classes",
      location: "solihull",
    },
    {
      url: saturdayOpen,
      alt: "Salsa and Bachata footwork class",
      location: "bearwood",
    },
    {
      url: zoomSaturday,
      alt: "Mauricio Reyes virtual party class",
      location: "virtual",
    },
  ];

  const renderClasses = (event) => {
    if (displayVenues === "displayed") {
      setDisplayVenues("hidden");
    }

    const classArray = classData.filter(
      (each) => each.location === event.currentTarget.id
    );

    setClasses(classArray);

    if (displayClasses === "hidden") {
      setDisplayClasses("displayed");
    }
  };

  return (
    <FlexContainer padding="true" id="classes">
      <div className="classes-container">
        <Title text="CLASSES" />
        <div className={`${displayVenues} venue-cards-container`}>
          <div className="venue-card">
            <div className="venue-name">BEARWOOD CLASSES</div>
            <button className="view-btn" id="bearwood" onClick={renderClasses}>
              VIEW MORE
            </button>
          </div>
          <div className="venue-card">
            <div className="venue-name">SOLIHULL WEDNESDAYS</div>
            <button className="view-btn" id="solihull" onClick={renderClasses}>
              VIEW MORE
            </button>
          </div>
          <div className="venue-card">
            <div className="venue-name">VIRTUAL CLASSES</div>
            <button className="view-btn" id="virtual" onClick={renderClasses}>
              VIEW MORE
            </button>
          </div>
        </div>

        {displayClasses === "displayed" && (
          <div className={`${displayClasses} class-cards-container`}>
            <div className="venue-buttons-container">
              <button
                id="bearwood"
                onClick={renderClasses}
                className="venue-card-small"
              >
                <div className="venue-name-small">BEARWOOD CLASSES</div>
              </button>
              <button
                id="solihull"
                onClick={renderClasses}
                className="venue-card-small"
              >
                <div className="venue-name-small">SOLIHULL WEDNESDAYS</div>
              </button>
              <button
                id="virtual"
                onClick={renderClasses}
                className="venue-card-small"
              >
                <div className="venue-name-small">VIRTUAL CLASSES</div>
              </button>
            </div>
            {classes.map((each, index) => {
              return <ClassCard url={each.url} alt={each.alt} key={index} />;
            })}
          </div>
        )}
      </div>
    </FlexContainer>
  );
};

export default Classes;
