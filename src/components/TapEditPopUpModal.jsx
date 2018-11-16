import React from 'react';
import PropTypes from 'prop-types';

function TapEditPopUpModal(props) {

  let beerBrandImageInput = null;
  let beerNameInput = null;
  let beerPriceInput = null;
  let beerABVInput = null;
  let beerBrandInput = null;
  let pintLevelInput = null;

  if(props.selectedEditTap != null) {
    beerBrandImageInput = props.beerBrandImageInput;
    beerNameInput = props.beerNameInput;
    beerPriceInput = props.beerPriceInput;
    beerABVInput = props.beerABVInput;
    beerBrandInput = props.beerBrandInput;
    pintLevelInput = props.pintLevelInput;
  }

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
             name='beerBrandImageInput'
             onChange={(event) => {props.onInputChange(event)}}
             value={props.beerBrandImageInput}
             ref={(input) => {beerBrandImageInput = input;}}
          />
        </div>
        <div>
          <label for='beer-name'>Beer Name</label>
          <input
            type='text'
            id='beer-name'
            name='beerNameInput'
            onChange={(event) => {props.onInputChange(event)}}
            value={props.beerNameInput}
            ref={(input) => {beerNameInput = input;}}
          />
        </div>
        <div>
          <label for='beer-price'>Beer Price</label>
          <input
            type='text'
            id='beer-price'
            name='beerPriceInput'
            onChange={(event) => {props.onInputChange(event)}}
            value={props.beerPriceInput}
            ref={(input) => {beerPriceInput = input;}}
          />
        </div>
        <div>
          <label for='beer-ABV'>ABV</label>
          <input
            type='text'
            id='beer-ABV'
            name='beerABVInput'
            onChange={(event) => {props.onInputChange(event)}}
            value={props.beerABVInput}
            ref={(input) => {beerABVInput = input;}}
          />
        </div>
        <div>
          <label for='beer-brand'>Beer Brand</label>
          <input
            type='text'
            id='beer-brand'
            name='beerBrandInput'
            onChange={(event) => {props.onInputChange(event)}}
            value={props.beerBrandInput}
            ref={(input) => {beerBrandInput = input;}}
          />
        </div>
        <div>
          <label for='pint-level'>Pint Level</label>
          <input
            type='number'
            id='pint-level'
            name='pintLevelInput'
            onChange={props.onInputChange}
            min='0'
            max='100'
            value={props.pintLevelInput}
            ref={(input) => {pintLevelInput = input;}}
          />
        </div>
        <button style={updateButtonStyles} type='submit'>Update</button>
      </form>
    </div>
  );
}

TapEditPopUpModal.propType = {
  selectedEditTap: PropTypes.string,
  masterTapList: PropTypes.object,
  onInputChange: PropTypes.func,
  beerBrandImageInput: PropTypes.string,
  beerNameInput: PropTypes.string,
  beerPriceInput: PropTypes.string,
  beerABVInput: PropTypes.string,
  beerBrandInput: PropTypes.string,
  pintLevelInput: PropTypes.string
}

export default TapEditPopUpModal;
