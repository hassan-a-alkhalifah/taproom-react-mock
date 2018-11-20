import React from 'react';
import PropTypes from 'prop-types';

function KegDeleteButton(props) {

  const kegDeleteButtonStyles = {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer'
  };

  return(
    <button
      onClick={() => {
        props.onTapDeleteSelection(props.tapId);
      }}
      style={kegDeleteButtonStyles}>Delete
    </button>
  );
}

KegDeleteButton.propTypes = {
  onTapDeleteSelection: PropTypes.func,
  tapId: PropTypes.string
}

export default KegDeleteButton;
