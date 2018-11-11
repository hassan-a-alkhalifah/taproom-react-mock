import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const headerStyles = {
    width: '100%',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: '0',
    zIndex: '2',
    background: 'linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(246,246,246,0.9) 47%, rgba(237,237,237,0.9) 100%)',
    boxShadow: '0px 10px 25px -3px rgba(0,0,0,0.75)'
  };
  const headerSubSectionStyles = {
    width: '300px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  const linkStyle = {
    textDecoration: 'none',
    color: '#000',
    fontSize: '25px'
  };

  return(
    <div style={headerStyles}>
      <div style={headerSubSectionStyles}>
        <p><Link to="/" style={linkStyle}>HOME</Link></p>
        <img alt="main logo"/>
        <p><Link to="/admin" style={linkStyle}>ADMIN</Link></p>
      </div>
    </div>
  );
}

export default Header;
