import React from 'react';
import facebookIcon from '../assets/images/facebook-icon.png';
import twitterIcon from '../assets/images/twitter-icon.png';
import instagramIcon from '../assets/images/instagram-icon.png';

const footerStyles = {
  background: 'linear-gradient(to right, rgba(40,33,32,1) 0%, rgba(40,33,32,1) 27%, rgba(38,22,13,1) 55%, rgba(61,28,10,1) 82%, rgba(66,27,6,1) 100%)',
  padding: '30px 30px 20px 30px',
  boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.75)'
}
const footerTopStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '30px',
  fontSize: '20px',
  color: '#FFF8F6'
}
const footerSocialIconsContainerStyles = {
  width: '260px',
  display: 'flex',
  justifyContent: 'space-between'
}
const footerBottomStyles = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '20px',
  color: '#FFF8F6'
}
const developerAndDesignerLinkStyles = {
  color: '#FFF8F6'
}

function Footer() {
  return(
    <div style={footerStyles}>
      <div style={footerTopStyles}>
        <div>
          <p>Taproom React Mock</p>
          <p>123 Who Cares Drive</p>
          <p>Portland, OR 97003</p>
        </div>
        <div style={footerSocialIconsContainerStyles}>
          <a href='#'><img src={facebookIcon} alt='facebook icon'/></a>
          <a href='#'><img src={twitterIcon} alt='twitter icon'/></a>
          <a href='#'><img src={instagramIcon} alt='instagram icon'/></a>
        </div>
      </div>
      <hr/>
      <div style={footerBottomStyles}>
        <p>Developed and Designed by: <a style={developerAndDesignerLinkStyles} href='https://github.com/hassan-a-alkhalifah' target='_blank'>Hassan Al-khalifah</a></p>
      </div>
    </div>
  );
}

export default Footer;
