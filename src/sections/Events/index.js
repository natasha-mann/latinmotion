import FlexContainer from "../../components/FlexContainer";
import Title from "../../components/Title";
import "./Events.css";

const Events = () => {
  return (
    <FlexContainer padding="true" id="events">
      <div className="events-container">
        <Title text="EVENTS" />
        <div className="event-cards-container">
          <div className="venue-card"></div>
          <div className="venue-card"></div>
          <div className="venue-card"></div>
        </div>
      </div>
    </FlexContainer>
  );
};

export default Events;
