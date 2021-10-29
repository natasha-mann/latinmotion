import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, animateScroll as scroll } from "react-scroll";
import "bootstrap/dist/js/bootstrap";

import logo from "../../images/latinmotion-logo.png";

import "./NavigationBar.css";
import "../../App.css";

const NavigationBar = (props) => {
  const [colourChange, setColourChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColourChange(true);
    } else {
      setColourChange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav
      id="navbar"
      className={
        colourChange
          ? "navbar navbar-expand-lg navigation-bar colourChange"
          : "navbar navbar-expand-lg navigation-bar"
      }
    >
      <div className="container-fluid">
        <div className="navbar-brand" onClick={scrollToTop}>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <GiHamburgerMenu color="black" />
          </span>
        </button>
        <div
          className="collapse navbar-collapse dropdown-nav"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav nav-links">
            <Link
              className="nav-link my-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-90}
              duration={300}
              isDynamic={true}
            >
              ABOUT
            </Link>
            <Link
              className="nav-link my-link"
              activeClass="active"
              to="classes"
              spy={true}
              smooth={true}
              offset={-90}
              duration={300}
              isDynamic={true}
            >
              CLASSES
            </Link>
            <Link
              className="nav-link my-link"
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-90}
              duration={300}
              isDynamic={true}
            >
              EVENTS
            </Link>
            <Link
              className="nav-link my-link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={300}
              isDynamic={true}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
