import React from 'react';
import PropTypes from 'prop-types';

function Admin(props) {
  let _beerBrandImage = null;
  let _beerName = null;
  let _beerPrice = null;
  let _beerABV = null;
  let _beerBrand = null;
  let _pintLevel = null;

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({beerBrandImage: _beerBrandImage.value, beerName: _beerName.value, beerPrice: _beerPrice.value, beerABV: _beerABV.value, beerBrand: _beerBrand.value, pintLevel: _pintLevel.value});
    _beerBrandImage.value = '';
    _beerName.value = '';
    _beerPrice.value = '';
    _beerABV.value = '';
    _beerBrand.value = '';
    _pintLevel.value = 0;
  }

  const adminStyles = {
    width: '100%',
    height: 'calc(100vh - 112px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '112px',
    background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%)'
  };
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '20px'
  };
  const addButtonStyles = {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    marginLeft: '137px'
  };

  return(
    <div style={adminStyles}>
      <style jsx>{`
          form div {
            margin-bottom: 10px;
          }
          form div:nth-child(1) label{
            margin-right: 10px;
          }
          form div:nth-child(2) label{
            margin-right: 58px;
          }
          form div:nth-child(3) label{
            margin-right: 64px;
          }
          form div:nth-child(4) label{
            margin-right: 106px;
          }
          form div:nth-child(5) label{
            margin-right: 59px;
          }
          form div:nth-child(6) label{
            margin-right: 68px;
          }
      `}</style>
      <h1>Add New Beer</h1>
      <form onSubmit={handleNewTapFormSubmission} style={formStyles}>
        <div>
          <label for='beer-brand-image'>Beer Brand Image</label>
          <input
             type='file'
             id='beer-brand-image'
             ref={(input) => {_beerBrandImage = input;}}
          />
        </div>
        <div>
          <label for='beer-name'>Beer Name</label>
          <input
            type='text'
            id='beer-name'
            ref={(input) => {_beerName = input;}}
          />
        </div>
        <div>
          <label for='beer-price'>Beer Price</label>
          <input
            type='text'
            id='beer-price'
            ref={(input) => {_beerPrice = input;}}
          />
        </div>
        <div>
          <label for='beer-ABV'>ABV</label>
          <input
            type='text'
            id='beer-ABV'
            ref={(input) => {_beerABV = input;}}
          />
        </div>
        <div>
          <label for='beer-brand'>Beer Brand</label>
          <input
            type='text'
            id='beer-brand'
            ref={(input) => {_beerBrand = input;}}
          />
        </div>
        <div>
          <label for='pint-level'>Pint Level</label>
          <input
            type='number'
            id='pint-level'
            min='0'
            max='100'
            ref={(input) => {_pintLevel = input;}}
          />
        </div>
        <button style={addButtonStyles} type='submit'>Add</button>
      </form>
    </div>
  );
}

Admin.propTypes = {
  onNewTapCreation: PropTypes.func
}

export default Admin;
