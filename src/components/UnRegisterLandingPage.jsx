import React from 'react';
import './UnRegisterLandingPage.scss';
import poster from '../assests/poster.jpg';

const UnRegisterLandingPage = () => {
  return (
    <div className='banner-container'>
      <h1>Welcome To NCRPL</h1>
      <div className='poster-wrapper d-flex'>
        <img src={poster} alt='poster' />
      </div>
    </div>
  );
};

export default UnRegisterLandingPage;
