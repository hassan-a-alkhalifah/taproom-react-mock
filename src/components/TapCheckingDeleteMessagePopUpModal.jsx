import React from 'react';
import PropTypes from 'prop-types';

function TapCheckingDeleteMessagePopUpModal(props) {

  const tapCheckingDeleteMessagePopUpModalStyles = {
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
  const questionAndOptionButtonssubContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  const questionStyles = {
    marginBottom: '20px'
  }
  const optionButtonsContainerStyles = {
    width: '100px',
    display: 'flex',
    justifyContent: 'space-between'
  }
  const optionButtonStyles = {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    margin: '0 auto'
  };

  return(
    <div style={tapCheckingDeleteMessagePopUpModalStyles}>
      <div style={questionAndOptionButtonssubContainerStyles}>
        <h3 style={questionStyles}>Are you sure you want to delete this tap?</h3>
        <div style={optionButtonsContainerStyles}>
          <button
            style={optionButtonStyles}
            onClick={() => {
              props.onDeletingSelectedTap(true);
            }}
          >Yes</button>
          <button
            style={optionButtonStyles}
            onClick={() => {
              props.onDeletingSelectedTap(false);
            }}
          >No</button>
        </div>
      </div>
    </div>
  );
}

TapCheckingDeleteMessagePopUpModal.propTypes = {
  onDeletingSelectedTap: PropTypes.func
}

export default TapCheckingDeleteMessagePopUpModal;
