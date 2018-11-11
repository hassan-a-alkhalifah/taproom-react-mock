import React from 'react';

function Admin() {

  const adminStyles = {
    width: '100%',
    height: 'calc(100vh - 60px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60px',
    background: 'linear-gradient(to right, #a28981 0%, #a86e5d 26%, #a2614e 44%, #9d4d34 71%, #762f19 100%)'
  }
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '20px'
  }
  const addButtonStyles = {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    marginLeft: '133px'
  }

  const fileSelectedHandler = event => {
    console.log("here");
    console.log(event);
  }

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
            margin-right: 55px;
          }
          form div:nth-child(3) label{
            margin-right: 61px;
          }
          form div:nth-child(4) label{
            margin-right: 94px;
          }
          form div:nth-child(5) label{
            margin-right: 54px;
          }
          form div:nth-child(6) label{
            margin-right: 61px;
          }
      `}</style>
      <h1>Add New Beer</h1>
      <form style={formStyles}>
        <div>
          <label for='beer-brand-image'>Beer Brand Image</label>
          <input type='file' id='beer-brand-image'/>
        </div>
        <div>
          <label for='beer-brand-image'>Beer Name</label>
          <input type='text' id='beer-name'/>
        </div>
        <div>
          <label for='beer-price'>Beer Price</label>
          <input type='text' id='beer-price'/>
        </div>
        <div>
          <label for='beer-abv'>ABV</label>
          <input type='text' id='beer-abv'/>
        </div>
        <div>
          <label for='beer-brand'>Beer Brand</label>
          <input type='text' id='beer-brand'/>
        </div>
        <div>
          <label for='pint-level'>Pint Level</label>
          <input type='number' id='pint-level' min='0' max='100'/>
        </div>
        <button style={addButtonStyles} type='submit'>Add</button>
      </form>
    </div>
  );
}

export default Admin;
