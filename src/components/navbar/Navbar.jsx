import React from 'react';

import './navbar.css';

function Navbar() {
  return (
    <header className="header">

    <div className="banner">
      <p>
        Tax credit up to $7,500 available for eligible vehicles. <span>Learn More</span>
      </p>
    </div>

    <nav>
        <img src="./teslaLogo.png" className='logo' alt="logo" />

        <div className="model nav__item">
          <a href="#model">Model S</a>
          <a href="#model">Model 3</a>
          <a href="#model">Model X</a>
          <a href="#model">Model Y</a>
          <a href="#model">Solar Roof</a>
          <a href="#model">Solar Panel</a>
          <a href="#model">Powerwall</a>
        </div>

        <div className="link nav__item">
          <a href="/">Shop</a>
          <a href="/">Account</a>
          <a href="/">Menu</a>
        </div>
    </nav>

    </header>
  )
}

export default Navbar