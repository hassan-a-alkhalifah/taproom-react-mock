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
    backgroundColor: "#FFF",
    borderBottom: '2px solid #555'
  };
  const headerSubSectionStyles = {
    width: '300px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  const linkStyle = {
    textDecoration: 'none',
    color: '#000'
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
