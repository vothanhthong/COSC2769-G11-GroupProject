import React from "react";

import slider1 from "../../assets/images/slider-1.jpeg";
import slider2 from "../../assets/images/slider-2.png";
import slider3 from "../../assets/images/slider-3.jpeg";

const Slider = () => {
  return (
    <div id="slider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#slider"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#slider"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#slider"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src={slider1} className="d-block w-100" alt={slider1} />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={slider2} className="d-block w-100" alt={slider2} />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={slider3} className="d-block w-100" alt={slider3} />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
