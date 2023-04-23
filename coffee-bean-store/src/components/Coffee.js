import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - {props.origin}</h3>
      <p><em>{props.roast}</em></p>
      <p><em>{props.price}</em></p>
        <hr />
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.number
};

export default Coffee;