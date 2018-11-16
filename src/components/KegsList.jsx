import React from 'react';
import beerTaps from '../assets/images/beer-taps.jpg';
import Keg from './Keg';
import TapEditPopUpModal from './TapEditPopUpModal';
import PropTypes from 'prop-types';

function KegsList(props) {

  const heroStyles = {
    position: 'relative',
    margin: '112px 0 0 0',
    width: '100%',
    height: 'calc(100vh - 112px)',
    overflow: 'hidden'
  };
  const heroSubContainerStyles = {
    width: '100%',
    height: 'calc(100%)',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1'
  };
  const heroTitleContainerStyles = {
    width: '100%',
    height: '112px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  const mainImageStyle = {
    width: '150%'
  };
  const masterKegListStyles = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '112px',
    background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%)'
  };

  return(
    <div>
      <style jsx>{`
          h1 {
            text-shadow: 0 0 15px #000;
            animation: appear 1s forwards;
          }
          #horizonal-rule {
            height: 2px;
            background-color: #fff8f6;
            box-shadow: 0px 0px 23px 1px rgba(0,0,0,0.75);
            animation: stretch 0.5s linear 1s forwards;
          }
          h3 {
            color: transparent;
            position: absolute;
            font-size: 35px;
            top: 49px;
            animation: drop 0.1s linear 1.7s forwards, show 0.1s linear 1.7s forwards;
          }
          @keyframes appear {
            0% {
              color: transparent;
              font-size: 0;
            }
            100% {
              color: #fff8f6;
              font-size: 60px;
            }
          }
          @keyframes stretch {
            0% {
              width: 0;
            }
            100% {
              width: 737px;
            }
          }
          @keyframes drop {
            0% {
              top: 49px;
            }
            100% {
              top: 80px;
            }
          }
          @keyframes show {
            0% {
              color: transparent;
              text-shadow: none;
            }
            100% {
              color: #fff8f6;
              text-shadow: 0 0 15px #000;
            }
          }
      `}</style>
      <div style={heroStyles}>
        <div style={heroSubContainerStyles}>
          <div style={heroTitleContainerStyles}>
            <h1>WE'RE JUST A TAP AWAY</h1>
            <div id="horizonal-rule"></div>
            <h3>A Tap For All Walks Of Life</h3>
          </div>
        </div>
        <img src={beerTaps} style={mainImageStyle}/>
      </div>
      <div style={masterKegListStyles}>
        <TapEditPopUpModal/>
        {Object.keys(props.masterTapList).map((tapId) => {
          let tap = props.masterTapList[tapId];
          return(
            <Keg
              key={tapId}
              beerBrandImage={tap.beerBrandImage}
              beerName={tap.beerName}
              beerPrice={tap.beerPrice}
              beerABV={tap.beerABV}
              beerBrand={tap.beerBrand}
              pintLevel={tap.pintLevel}
              onTapEditSelection={props.onTapEditSelection}
              tapId={tapId}
            />
          );
        })}
      </div>
    </div>
  );
}

KegsList.propTypes = {
  masterTapList: PropTypes.object,
  onTapEditSelection: PropTypes.func,
  tapId: PropTypes.string
}

export default KegsList;
