import React from 'react';
import PropTypes from 'prop-types';
import KegEditButton from './KegEditButton';
import KegDeleteButton from './KegDeleteButton';

function Keg(props) {

  const kegStyles = {
    width: '493px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '60px'
  };
  const beerBrandImageStyles = {
    width: '100px',
    height: '100px',
    marginRight: '20px'
  };
  const beerSpecsStyles = {
    height: '100px',
    marginRight: '20px'
  };

  return(
    <div style={kegStyles}>
      <style jsx>{`
          .beer-name {
            font-size: 40px;
          }
          .beer-price {
            font-size: 25px;
          }
          .beer-brand {
            font-size: 30px;
          }
      `}</style>
      <img src={props.beerBrandImage} style={beerBrandImageStyles}/>
      <div style={beerSpecsStyles}>
        <p><span className='beer-name'>{props.beerName}</span>  <span className='beer-price'>{props.beerPrice}</span></p>
        <p><span className='beer-brand'>{props.beerBrand}</span> <span className='beer-abv'>{props.beerABV}</span></p>
        <p className='pint-level'>Pint Level: {props.pintLevel}</p>
      </div>
      <div>
        <KegEditButton
          onTapEditSelection={props.onTapEditSelection}
          tapId={props.tapId}
        />
        <KegDeleteButton
          onTapDeleteSelection={props.onTapDeleteSelection}
          tapId={props.tapId}
        />
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
  pintLevel: PropTypes.string,
  onTapEditSelection: PropTypes.func,
  onTapDeleteSelection: PropTypes.func,
  tapId: PropTypes.string
};

export default Keg;
