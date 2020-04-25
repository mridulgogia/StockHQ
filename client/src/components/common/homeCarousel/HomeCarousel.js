import React from "react";
import Proptypes from "prop-types";
import Card from "react-bootstrap/Card";

function HomeCarousel({ title, data }) {
  if (data === {} || data === undefined || data === null) {
    return null;
  }
  const mapping = data.map((item, index) => {
    console.log(item.changesPercentage)
    console.log( parseInt(item.changesPercentage))
    return (
    <div key={index} className="col-md-2 carousel_item">
      <Card className="text-center">
        <Card.Header>{item.companyName}</Card.Header>
        <Card.Body>
          <Card.Title>{item.ticker}</Card.Title>
          <Card.Text>$ {item.price}</Card.Text>
          <Card.Text
            className={item.changesPercentage[1] !== "-" ? "positive" : "negative"}
          >
            {item.changesPercentage}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )});

  return (
    <div className="row">
      <div className="col-md-12 carousel_container">
        <h2 className="carousel_title"> {title}</h2>
        <div className="row">{mapping}</div>
      </div>
    </div>
  );
}

HomeCarousel.proptypes = {
  title: Proptypes.string.isRequired,
  data: Proptypes.array.isRequired,
};

export default HomeCarousel;
