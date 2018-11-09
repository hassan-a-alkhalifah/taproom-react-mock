import React from 'react';
import beerTaps from '../assets/images/beer-taps.jpg';
import Keg from './Keg';

function KegsList() {

  console.log({beerTaps});

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

  const mainImageStyle = {
    width: '100%'
  };

  return(
    <div>
      <img src={beerTaps} style={mainImageStyle}/>
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
  );
}

export default KegsList;
