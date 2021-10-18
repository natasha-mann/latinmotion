import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
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
            <GiHamburgerMenu />
          </span>
        </button>
        <div
          className="collapse navbar-collapse dropdown-nav"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav nav-links">
            <a className="nav-link my-link" href="#about">
              ABOUT
            </a>
            <a className="nav-link my-link" href="#classes">
              CLASSES
            </a>
            <a className="nav-link my-link" href="#events">
              EVENTS
            </a>
            <a className="nav-link my-link" href="#contact">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
