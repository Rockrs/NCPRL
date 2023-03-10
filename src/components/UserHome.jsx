import React from 'react';
import './UserHome.scss';
import Banner from '../assests/banner.svg';
import Links from './Links';

const UserHome = () => {
  return (
    <main className='user-home-container'>
      <section>
        <div className='img-wrapper'>
          <img src={Banner} alt='banner' />
        </div>
      </section>
      <Links></Links>
    </main>
  );
};

export default UserHome;
