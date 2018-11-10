import React from 'react';

function KegEditButton() {

  const kegEditButtonStyles = {
    padding: '10px',
    borderRadius: '4px',
    border: 'none'
  }

  return(
    <button style={kegEditButtonStyles}>Edit</button>
  );
}

export default KegEditButton;
