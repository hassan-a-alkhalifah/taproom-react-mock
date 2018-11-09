import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <div>
      <img src={props.beerBrandImage}/>
      <div>
        <p>{props.beerName}  {props.beerPrice}</p>
        <p>{props.beerABV}  {props.beerBrand}</p>
        <p>Pint Level: {props.pintLevel}</p>
      </div>
    </div>
  );
}

Keg.propTypes = {
  beerBrandImage: PropTypes.string,
  beerName: PropTypes.string,
  beerPrice: PropTypes.string,
  beerABV: PropTypes.string,
  beerBrand: PropTypes.string,
  pintLevel: PropTypes.number
};

export default Keg;
