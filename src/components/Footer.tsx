import React from 'react';
import './Footer.css';
import { MdCall, MdEmail, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='contact-us'>Contact Us:</div>
      <div className='footer-info'>
        <p>
          <MdCall />
          <span style={{ marginLeft: '10px' }}>+918105070961</span>
        </p>
        <p>
          <MdEmail />
          <span style={{ marginLeft: '10px' }}>shrmabhishek2012@gmail.com</span>
        </p>
        <p>
          <MdLocationOn />
          <a
            href='https://maps.app.goo.gl/scWWNYqaqTpGH43W6'
            target='_blank'
            rel='noreferrer'
            style={{ marginLeft: '10px' }}
          >
            Salem Kitchen
          </a>
        </p>
      </div>
      <div className='footer-Registered-info'></div>
    </div>
  );
};

export default Footer;
