import FlexContainer from "../../components/FlexContainer";
import Title from "../../components/Title";
import "./Classes.css";

const Classes = () => {
  return (
    <FlexContainer padding="true" id="classes">
      <div className="classes-container">
        <Title text="CLASSES" />
        <div className="class-cards-container">
          <div className="venue-card"></div>
          <div className="venue-card"></div>
          <div className="venue-card"></div>
        </div>
      </div>
    </FlexContainer>
  );
};

export default Classes;
