import FilterStrip from "../../components/FilterStrip";
import FlexContainer from "../../components/FlexContainer";
import Title from "../../components/Title";
import "./Parties.css";

const Parties = () => {
  return (
    <FlexContainer padding="true" id="events">
      <div className="events-container">
        <Title text="EVENTS" />
        <FilterStrip />
        <div className="event-cards-container"></div>
      </div>
    </FlexContainer>
  );
};

export default Parties;
