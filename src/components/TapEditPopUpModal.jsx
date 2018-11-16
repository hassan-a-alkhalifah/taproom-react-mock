import React from 'react';

function TapEditPopUpModal() {

  let _beerBrandImage = null;
  let _beerName = null;
  let _beerPrice = null;
  let _beerABV = null;
  let _beerBrand = null;
  let _pintLevel = null;

  const tapEditPopUpModalStyles = {
    width: '400px',
    height: '300px',
    position: 'absolute',
    top: '112',
    right: '0',
    bottom: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(246,246,246,0.9) 47%, rgba(237,237,237,0.9) 100%)',
    boxShadow: '0px 0px 37px -2px rgba(0,0,0,0.75)',
    margin: 'auto',
  }
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '20px'
  };
  const updateButtonStyles = {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    margin: '0 auto'
  };

  return(
    <div style={tapEditPopUpModalStyles}>
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
      <form style={formStyles}>
        <div>
          <label for='beer-brand-image'>Beer Brand Image</label>
          <input
             type='text'
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
        <button style={updateButtonStyles} type='submit'>Update</button>
      </form>
    </div>
  );
}

export default TapEditPopUpModal;
