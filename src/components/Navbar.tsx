import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link nav-menu-items' href='#'>
                About Us
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link nav-menu-items' href='#'>
                Contact
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link nav-menu-items' href='#'>
                SignIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
