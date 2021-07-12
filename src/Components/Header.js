import React from "react";
import kegImage from "./../img/beer-keg.png";

function Header() {
  const headerStyle = {
    backgroundColor: 'rgb(76, 195, 255)',
    marginTop: '0px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <React.Fragment>
      <h3 style={headerStyle}>Tap Room</h3>
      <img style={{ height: 200, width: 200 }} src={kegImage} alt="An image of a keg" />
    </React.Fragment>
  )
}

export default Header;