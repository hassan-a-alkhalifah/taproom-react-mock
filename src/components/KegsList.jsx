import React from 'react';
import beerTaps from '../assets/images/beer-taps.jpg';
import Keg from './Keg';

function KegsList() {

  const masterKegsList = [
    {
      beerBrandImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOmjZOYytvTyrTzuc0f2QrGj-rixSqXarTlpZsRVPGaMu-aur',
      beerName: 'Bock',
      beerPrice: '$3.50',
      beerABV: '4.4%',
      beerBrand: 'Shiner',
      pintLevel: 100
    },
    {
      beerBrandImage: 'https://vectors.pro/wp-content/uploads/2017/10/guinness-draught-logo-vector.png',
      beerName: 'Draught',
      beerPrice: '$4.00',
      beerABV: '5.0%',
      beerBrand: 'Guinness',
      pintLevel: 100
    },
    {
      beerBrandImage: 'http://kegguys.com/wp-content/uploads/2017/05/blue_moon_logo.jpg',
      beerName: 'Belgian White',
      beerPrice: '$5.00',
      beerABV: '5.4%',
      beerBrand: 'Blue Moon',
      pintLevel: 100
    },
    {
      beerBrandImage: 'https://grillfestival.com/wp-content/uploads/2017/02/budweiser-logo-1.jpg',
      beerName: 'Budweiser',
      beerPrice: '$3.25',
      beerABV: 'Budweiser',
      beerBrand: '5.0%',
      pintLevel: 100
    },
    {
      beerBrandImage: 'https://i.pinimg.com/originals/9a/a4/81/9aa481a00d10248313da7d48388125f0.png',
      beerName: 'Lager',
      beerPrice: '$3.25',
      beerABV: '5.0%',
      beerBrand: 'Heineken',
      pintLevel: 100
    },
  ];

  const heroStyles = {
    position: 'relative',
    margin: '60px 0 0 0',
    width: '100%',
    height: 'calc(100vh - 60px)',
    overflow: 'hidden'
  }
  const heroSubContainerStyles = {
    width: '100%',
    height: 'calc(100%)',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1'
  }
  const heroTitleContainerStyles = {
    width: '100%',
    height: '110px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  const mainImageStyle = {
    width: "150%"
  };
  const masterKegListStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '60px',
    background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%)'
  }

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
        {masterKegsList.map((keg, index) => {
          return(
            <Keg
              key={index}
              beerBrandImage={keg.beerBrandImage}
              beerName={keg.beerName}
              beerPrice={keg.beerPrice}
              beerABV={keg.beerABV}
              beerBrand={keg.beerBrand}
              pintLevel={keg.pintLevel}
            />
          );
        })}
      </div>
    </div>
  );
}

export default KegsList;
