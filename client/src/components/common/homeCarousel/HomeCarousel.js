import React, { Component } from "react";
import Proptypes from "prop-types";
import HomeCarouselItem from "./HomeCarouselItem";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function HomeCarousel({ title, data }) {
  if (data === {} || data === undefined || data === null) {
    return null;
  }
  const mapping = data.map((item, index) => (
    <HomeCarouselItem key={index} item={item} />
  ));

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="row">
      <div className="col-md-12 carousel_container">
        <h2 className="carousel_title"> {title}</h2>
        {/* <div className="row">{mapping}</div> */}
        <Slider {...settings}>
        {mapping}
        </Slider>
      </div>
    </div>
  );
}

// HomeCarousel.proptypes = {
//   title: Proptypes.string.isRequired,
//   data: Proptypes.array.isRequired,
// };

export default HomeCarousel;
