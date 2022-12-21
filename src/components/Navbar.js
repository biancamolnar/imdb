import React from 'react';
import logo from '../../src/logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {


  return (
    <div className='nav'>
        <ul>
        <Link to ="/">
          <img src={logo} alt="movie db logo" className='logo' style={{width: "10%"}}></img>
          </Link>
        </ul>
        
    </div>
  )
}

export default Navbar