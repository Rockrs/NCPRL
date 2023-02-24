import React from 'react';
import Typed from 'react-typed';
import { ReactComponent as Banner } from '../assests/banner.svg';
import './About.css';

const About = () => {
  return (
    <div className='about-us'>
      <div className='banner-wrapper'>
        <Banner />
      </div>
      <div className='info'>
        <h1>About Us</h1>
        <Typed
          strings={[
            `Welcome to NCPRL. We have recently started this buiseness with the aim of supporting all the criclet lovers.`,
          ]}
          typeSpeed={40}
        />
      </div>
    </div>
  );
};

export default About;
