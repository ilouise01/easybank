import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import burgermenu from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg'

function Header() {
  const [isHidden, setIsHidden] = useState(true);

  // Function to handle button click and remove the hidden class
  const burgerClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <header>
        <img className='logo' src={logo} />
        <nav className={isHidden ? 'nav hidden' : 'nav active'}>
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Contact</h4>
          <h4>Blog</h4>
          <h4>Careers</h4>
        </nav>
        <button className='brgr-menu' ><img className={isHidden ? '' : 'rotate'} onClick={burgerClick} src={isHidden ? burgermenu : close} /></button>
        <button className='ri-btn desktop' style={{marginRight: '2rem'}}><h4>Request Invite</h4></button>
    </header>
  );
}

export default Header;
