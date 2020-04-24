import React from "react";
import Proptypes from "prop-types";

import { Carousel } from "react-responsive-carousel";

function HomeCarousel({ title, data }) {
  console.log("home", typeof data, data);
  if (data === {} || data === undefined || data === null) {
    return null;
  }
  return (
    <div className="row">
      <div className="col-md-12">
        <h2> {title}</h2>
      </div>
      {data.map((item, index) => (
        <div key={index} className="col-md-4">
          <div>{item.ticker}</div>
          <h6>{item.price}</h6>
        </div>
      ))}
    </div>
  );
}

HomeCarousel.proptypes = {
  title: Proptypes.string.isRequired,
  data: Proptypes.array.isRequired,
};

export default HomeCarousel;
