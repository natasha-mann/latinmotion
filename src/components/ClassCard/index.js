import React, { useState } from "react";

import "./ClassCard.css";
import "../../App.css";

const ClassCard = (props) => {
  const [display, setDisplay] = useState("hidden");
  const showDiv = (e) => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideDiv = (e) => {
    e.preventDefault();
    setDisplay("hidden");
  };

  return (
    <a
      href={props.link}
      className={[`card-container-${props.size}`, `card-container`].join(" ")}
    >
      <div
        className={[`card-image-${props.size}`, `card-image`].join(" ")}
        style={{
          backgroundImage: "url(" + props.image + ")",
        }}
        onMouseEnter={(e) => showDiv(e)}
        onMouseLeave={(e) => hideDiv(e)}
      >
        <div className={`${display} image-overlay`}>{props.message}</div>
      </div>
      <div className="card-body">
        <div className="card-link" href="/">
          <h3 className={`card-title-${props.size}`}>{props.name}</h3>
        </div>
      </div>
      <div>{props.price && <p className="price-text">£{props.price}</p>}</div>
    </a>
  );
};

export default ClassCard;
