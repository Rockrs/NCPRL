import React from 'react';
import './Profile.scss';

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <div className='card'>
        <div className='div_profile_image'>
          <img
            src='../assests/profile.jpg'
            alt='profile'
            className='profile_image'
          />
        </div>
        <div className='name_and_age'>
          <p className='name'>Victor Crest</p>
          <p className='age'>26</p>
        </div>
        <p className='place'>London</p>

        <div className='about_profile'>
          <div className='div_about_profile'>
            <h1 className='number'>80K</h1>
            <p className='about'>Followers</p>
          </div>

          <div className='div_about_profile'>
            <h1 className='number'>803K</h1>
            <p className='about'>Likes</p>
          </div>

          <div className='div_about_profile'>
            <h1 className='number'>1.4K</h1>
            <p className='about'>Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
