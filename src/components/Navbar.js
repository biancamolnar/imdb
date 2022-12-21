import React from 'react';
import logo from '../src/logo.svg';

function Navbar() {


  return (
    <div className='nav'>
        <ul>
          <img src={logo} alt="movie db logo" className='logo' style={{width: "10%"}}></img>
        </ul>
        
    </div>
  )
}

export default Navbar