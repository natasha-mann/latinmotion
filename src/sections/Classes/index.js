import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import ClassCard from "../../components/ClassCard";
import FlexContainer from "../../components/FlexContainer";
import Title from "../../components/Title";
import "./Classes.css";

import jayneSaturday from "../../images/classImages/jayne-saturday.jpeg";
import privateClass from "../../images/classImages/private-class.jpeg";
import saturdayOpen from "../../images/classImages/saturday-open.jpeg";
import zoomSaturday from "../../images/classImages/zoom-saturday.jpeg";
import tuesdaySaturday from "../../images/classImages/tuesday-saturday.jpeg";
import wednesdaySolihull from "../../images/classImages/wednesday-solihull.jpeg";
import timetable from "../../images/class-timetable.jpeg";

const Classes = () => {
  const [displayVenues, setDisplayVenues] = useState("displayed");
  const [displayClasses, setDisplayClasses] = useState("hidden");
  const [classes, setClasses] = useState([]);
  const [show, setShow] = useState(false);

  const classData = [
    {
      url: saturdayOpen,
      alt: "Salsa and Bachata footwork class",
      location: "bearwood",
      facebook: "https://www.facebook.com/events/951593018772365/",
    },
    {
      url: jayneSaturday,
      alt: "Jayne Turpin Ladies Styling Class",
      location: "bearwood",
      facebook: "https://www.facebook.com/events/951593018772365/",
    },
    {
      url: privateClass,
      alt: "Mauricio Reyes Private Classes",
      location: "bearwood",
    },
    {
      url: tuesdaySaturday,
      alt: "SALSA & BACHATA 50:50 (Beginners & Improvers)",
      location: "bearwood",
      facebook: "https://www.facebook.com/events/951593018772365/",
    },
    {
      url: tuesdaySaturday,
      alt: "BACHATA PARTNER-WORK CLASSES (up to 3 levels) Beginners, Improvers + Int/Adv",
      location: "bearwood",
      facebook: "https://www.facebook.com/events/951593018772365/",
    },
    {
      url: tuesdaySaturday,
      alt: "SALSA PARTNER-WORK CLASSES (up to 3 levels) Beginners, Improvers + Int/Adv",
      location: "bearwood",
      facebook: "https://www.facebook.com/events/951593018772365/",
    },
    {
      url: wednesdaySolihull,
      alt: "SALSA & BACHATA 50:50 (Beginners & Improvers)",
      location: "solihull",
      facebook: "https://www.facebook.com/events/287294166553552",
    },
    {
      url: wednesdaySolihull,
      alt: "BACHATA PARTNER-WORK CLASSES (up to 3 levels) Beginners, Improvers + Int/Adv",
      location: "solihull",
      facebook: "https://www.facebook.com/events/287294166553552",
    },
    {
      url: wednesdaySolihull,
      alt: "SALSA PARTNER-WORK CLASSES (up to 3 levels) Beginners, Improvers + Int/Adv",
      location: "solihull",
      facebook: "https://www.facebook.com/events/287294166553552",
    },
    {
      url: zoomSaturday,
      alt: "Mauricio Reyes virtual party class",
      location: "virtual",
    },
    {
      url: jayneSaturday,
      alt: "Jayne Turpin Ladies Styling Class",
      location: "virtual",
      facebook: "https://www.facebook.com/events/951593018772365/",
    },
    {
      url: tuesdaySaturday,
      alt: "SALSA & BACHATA 50:50 (Beginners & Improvers)",
      location: "virtual",
      facebook: "https://www.facebook.com/events/951593018772365/",
    },
    {
      url: tuesdaySaturday,
      alt: "BACHATA PARTNER-WORK CLASSES (up to 3 levels) Beginners, Improvers + Int/Adv",
      location: "virtual",
      facebook: "https://www.facebook.com/events/951593018772365/",
    },
    {
      url: tuesdaySaturday,
      alt: "SALSA PARTNER-WORK CLASSES (up to 3 levels) Beginners, Improvers + Int/Adv",
      location: "virtual",
      facebook: "https://www.facebook.com/events/951593018772365/",
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

  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);

  return (
    <FlexContainer padding="true" id="classes">
      <div className="classes-container">
        <Title text="CLASSES" />
        <div className="timetable">
          <button onClick={handleShowModal} className="venue-card-small">
            <div className="venue-name-small">VIEW TIMETABLE</div>
          </button>
        </div>
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
              return (
                <ClassCard
                  url={each.url}
                  alt={each.alt}
                  key={index}
                  facebook={each.facebook}
                />
              );
            })}
          </div>
        )}
      </div>

      <Modal show={show} onHide={handleCloseModal} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img
            src={timetable}
            alt="Full Class Timetable Latin Motion"
            className="modal-image"
          />
        </Modal.Body>
      </Modal>
    </FlexContainer>
  );
};

export default Classes;
