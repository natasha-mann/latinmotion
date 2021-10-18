import "./About.css";
import Title from "../../components/Title";
import FlexContainer from "../../components/FlexContainer";
import Carousel from "../../components/CardsCarousel";

import mauricio from "../../images/mauricio-party.jpeg";
import dj from "../../images/mauricio-dj.jpeg";
import teaching from "../../images/mauricio-teaching.jpeg";
import party from "../../images/party-img.jpeg";
import landrover from "../../images/landrover.jpeg";

const About = () => {
  const carouselImages = [
    { src: mauricio, alt: "Mauricio Reyes", className: "about-img" },
    { src: teaching, alt: "Mauricio Reyes", className: "about-img" },
    {
      src: landrover,
      alt: "Landrover Club Cuban night",
      className: "about-img",
    },
    { src: dj, alt: "Mauricio Reyes", className: "about-img" },
    { src: party, alt: "Latin Motion NYE party", className: "about-img" },
    { src: party, alt: "Latin Motion NYE party", className: "about-img" },
    { src: party, alt: "Latin Motion NYE party", className: "about-img" },
    { src: party, alt: "Latin Motion NYE party", className: "about-img" },
    { src: party, alt: "Latin Motion NYE party", className: "about-img" },
    { src: party, alt: "Latin Motion NYE party", className: "about-img" },
  ];

  return (
    <>
      {" "}
      <FlexContainer position="center" padding="true" id="about">
        <div className="section-container">
          <Title text="ABOUT LATIN MOTION" />

          <div className="about-content">
            <p className="about-text">
              Latin Motion was founded in 1993 by Mauricio Reyes. Today it hosts
              classes in salsa, bachata and kizomba PLUS special workshops,
              parties, club nights, special events, concerts, weekenders, and
              much more, in and around the Midlands.
            </p>
          </div>
        </div>
      </FlexContainer>
      <div className="carousel-div">
        <Carousel itemsArray={carouselImages}></Carousel>
      </div>
    </>
  );
};

export default About;
