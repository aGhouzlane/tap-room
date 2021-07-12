import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const {keg, onBuyPint } = props;
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <p>{keg.name}</p>
      <p>{keg.brand}</p>
      <p>{keg.price}</p>
      <p>{keg.alcoholeContent}</p>
      <p>{keg.pint}</p>
      <hr />
      <button onClick={() => onBuyPint(keg.id)}>Buy pint</button> 
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onBuyPint: PropTypes.func
};

export default KegDetail;