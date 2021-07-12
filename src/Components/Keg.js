import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <p>{props.name}</p>
        <p>{props.brand}</p>
        <p>{props.price}</p>
        <p>{props.alcoholeContent}</p>
        <p>Pints left: {props.pint}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholeContent: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  pint: PropTypes.number
};

export default Keg;