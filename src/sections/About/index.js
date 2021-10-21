import "./About.css";
import Title from "../../components/Title";
import FlexContainer from "../../components/FlexContainer";
import Carousel from "../../components/CardsCarousel";

import mauricio from "../../images/carouselImages/mauricio-party.jpeg";
import dj from "../../images/carouselImages/mauricio-dj.jpeg";
import teaching from "../../images/carouselImages/mauricio-teaching.jpeg";
import party from "../../images/carouselImages/party-img.jpeg";
import landrover from "../../images/carouselImages/landrover.jpeg";
import djs from "../../images/carouselImages/djs-landrover.jpeg";
import nyeLineup from "../../images/carouselImages/nye-lineup.jpeg";
import nyeParty from "../../images/carouselImages/nye-party.jpeg";
import nyePromo from "../../images/carouselImages/nye-promo.jpeg";

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
    { src: djs, alt: "Latin Motion DJs", className: "about-img" },
    {
      src: nyeLineup,
      alt: "Latin Motion NYE party lineup",
      className: "about-img",
    },
    { src: nyeParty, alt: "Latin Motion NYE party", className: "about-img" },
    {
      src: nyePromo,
      alt: "Latin Motion NYE party promo",
      className: "about-img",
    },
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
