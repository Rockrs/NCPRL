import React from 'react';
import './ContactCard.scss';
import Name from '../assests/man.png';
import Mobile from '../assests/telephone.png';
import Intro from '../assests/info.png';

const ContactCard = ({ userInfo, image }) => {
  const { name, mobile, intro } = userInfo;
  return (
    <div className='card-container d-flex'>
      <div class='image-container'>
        <img class='user-image' src={image} alt={name}></img>
      </div>
      <div className='info-container'>
        <div className='info'>
          <img src={Name} alt='name-icon' />
          {name}
        </div>
        <div className='info'>
          <img src={Mobile} alt='mobile-icon' />
          {mobile}
        </div>
        <div className='info'>
          <img src={Intro} alt='intro-icon' />
          {intro}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
