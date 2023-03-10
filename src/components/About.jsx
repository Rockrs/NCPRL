import React from 'react';
import './About.scss';
import logo from '../assests/logo.png';

const About = () => {
  return (
    <div>
      <div className='banner-wrapper'>
        <div className='logo'>
          <img src={logo} alt='logo' />
          <div className='about-us-header'>About Us</div>
        </div>

        <div className='img-wrapper'>
          <div className='fires'>
            <div class='fire'>
              <div class='fire-left'>
                <div class='main-fire'></div>
                <div class='particle-fire'></div>
              </div>
              <div class='fire-center'>
                <div class='main-fire'></div>
                <div class='particle-fire'></div>
              </div>
              <div class='fire-right'>
                <div class='main-fire'></div>
                <div class='particle-fire'></div>
              </div>
              <div class='fire-bottom'>
                <div class='main-fire'></div>
              </div>
            </div>
          </div>
          <div className='flute'>
            
          </div>
        </div>
        <div className='heading-wrapper'></div>
      </div>
      <div className='content-wrapper'></div>
    </div>
  );
};

export default About;
