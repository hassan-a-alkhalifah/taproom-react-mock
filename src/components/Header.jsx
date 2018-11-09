import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div>
    <Link to="/"><p>HOME</p></Link>
    <img alt="main logo"/>
    <Link to="/admin"><p>ADMIN</p></Link>
    </div>
  );
}

export default Header;