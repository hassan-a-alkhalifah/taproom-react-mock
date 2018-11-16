import React from 'react';
import PropTypes from 'prop-types';

function KegEditButton(props) {

  const kegEditButtonStyles = {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer'
  };

  return(
    <button
      onClick={() => {
        props.onTapEditSelection(props.tapId);
      }}
      style={kegEditButtonStyles}>Edit
    </button>
  );
}

KegEditButton.propTypes = {
  onTapEditSelection: PropTypes.func,
  tapId: PropTypes.string
}

export default KegEditButton;
