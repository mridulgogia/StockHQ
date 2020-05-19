import React from "react";
import Proptypes from "prop-types";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const HomeCarouselItem = (props) => {
  const item = props.item;
  return (
    // <div className="carousel_item " {...props}>
      <Card className="text-center" {...props}>
        <Card.Header>
          <Link to={`/company/${item.ticker}`} className="magic-link"></Link>
          {item.companyName}
        </Card.Header>
        <Card.Body>
          <Card.Title>{item.ticker}</Card.Title>
          <Card.Text>$ {item.price}</Card.Text>
          <Card.Text
            className={
              item.changesPercentage[1] !== "-" ? "positive" : "negative"
            }
          >
            {item.changesPercentage}
          </Card.Text>
        </Card.Body>
      </Card>
    //  </div>
  );
};

HomeCarouselItem.propTypes = {
  item: Proptypes.object.isRequired,
};

export default HomeCarouselItem;
