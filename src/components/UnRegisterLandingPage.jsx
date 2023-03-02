import React from 'react';
import './UnRegisterLandingPage.scss';
import { useNavigate } from 'react-router-dom';
// import loginIcon from '../assests/login.png';

const UnRegisterLandingPage = () => {
  const navigate = useNavigate();
  const redirectToSignIn = () => {
    navigate('/sign-in');
  };

  return (
    <div className='banner-container' onClick={redirectToSignIn}>
      <div className='cricket-pitch'>
        <div id='crease'></div>
      </div>
    </div>
  );
};

export default UnRegisterLandingPage;
