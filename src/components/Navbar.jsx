import React, { useContext } from 'react';
import { UserContext } from '../Context/AuthContext';
import './Navbar.scss';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const displayName = user?.displayName?.split(' ')[0];
  const navigate = useNavigate();

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const redirectToContact = () => {
    navigate('/contact-us');
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light '>
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
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                About Us
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' onClick={redirectToContact}>
                Contact Us
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#' onClick={logoutHandler}>
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className='user-info'>
          <div className='user-name'>{displayName}</div>
          <div className='avatar'></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
