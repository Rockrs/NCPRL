import React, { useContext } from 'react';
import { UserContext } from '../Context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const displayName = user?.displayName?.split(' ')[0];
  const navigate = useNavigate();
  const navbarCollapse = document.getElementsByClassName('navbar-collapse');

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        navbarCollapse[0].classList.remove('show');
        localStorage.removeItem('profile-pic');
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const redirectToContact = () => {
    navbarCollapse[0].classList.remove('show');
    navigate('/contact-us');
  };

  const redirectToUpdateProfile = () => {
    navbarCollapse[0].classList.remove('show');
    navigate('/profile');
  };

  const redirectToAbout = () => {
    navbarCollapse[0].classList.remove('show');
    navigate('/about-us');
  };

  const redirectToLogin = () => {
    navbarCollapse[0].classList.remove('show');
    navigate('/login');
  };

  const redirectToRegister = () => {
    navbarCollapse[0].classList.remove('show');
    navigate('/register');
  };

  const redirectToHome = () => {
    navbarCollapse[0].classList.remove('show');
    if (user) {
      navigate('/user-home');
    } else {
      navigate('/');
    }
  };

  const openProfileModal = () => {
    const Modal = document.getElementsByClassName('modal')[0];
    Modal.classList.add('show');
    const userProfileInfo = document.getElementsByClassName('profile-info')[0];
    userProfileInfo.style.setProperty('animation', 'mymove 5s');
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
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
              <a className='nav-link' onClick={redirectToHome}>
                Home
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' onClick={redirectToAbout}>
                About Us
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' onClick={redirectToContact}>
                Contact Us
              </a>
            </li>
            {user && (
              <li className='nav-item'>
                <a className='nav-link' onClick={logoutHandler}>
                  Logout
                </a>
              </li>
            )}
            {user && (
              <li className='nav-item'>
                <a className='nav-link' onClick={redirectToUpdateProfile}>
                  Update Profile
                </a>
              </li>
            )}
            {!user && (
              <li className='nav-item'>
                <a className='nav-link' onClick={redirectToRegister}>
                  Register
                </a>
              </li>
            )}
            {!user && (
              <li className='nav-item'>
                <a className='nav-link' onClick={redirectToLogin}>
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
        {user && (
          <div className='user-info'>
            <div className='user-name'>{displayName}</div>
            <div
              className='avatar'
              id='min-avatar'
              onClick={openProfileModal}
            ></div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
