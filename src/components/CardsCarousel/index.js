import Carousel from "react-multi-carousel";
import { isMobile } from "react-device-detect";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1401 },
    items: 6,
    slidesToSlide: 1,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 5,
    slidesToSlide: 1,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
  smallTablet: {
    breakpoint: { max: 767, min: 465 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
};

const CardsCarousel = (props) => {
  const cards = props.itemsArray.map((each) => {
    return <img src={each.src} alt={each.alt} className={each.className}></img>;
  });

  return (
    <Carousel
      infinite={true}
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props.deviceType}
      autoPlay={isMobile ? true : false}
      autoPlaySpeed={3000}
    >
      {cards}
    </Carousel>
  );
};

export default CardsCarousel;
