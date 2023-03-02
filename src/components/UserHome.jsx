import React from 'react';
import './UserHome.scss';
import stadium from '../assests/stadium.jpg';
import Navbar from './Navbar';
import Links from './Links';

const UserHome = () => {
  return (
    <main className='user-home-container'>
      <Navbar></Navbar>
      <section className='mt-4'>
        <div className='ncrpl pt-4'>NCR Premier League</div>
        <div className='img-wrapper mt-3'>
          <img src={stadium} alt='staduim' />
        </div>
      </section>
      <Links></Links>
    </main>
  );
};

export default UserHome;
