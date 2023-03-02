import React from 'react';
import users from '../assests/json/contact.json';
import ContactCard from './ContactCard';
import Naveen from '../assests/naveen.jpeg';
import Shekhar from '../assests/shekhar.jpeg';
import './Contact.scss';

const Contact = () => {
  const Users = JSON.parse(JSON.stringify(users));
  const userKeys = Object.keys(Users);
  const images = [Naveen, Shekhar];
  return (
    <div className='container contact-wrapper'>
      <h1 className='text-center'>Contact Us</h1>
      {userKeys.map((el) => {
        const userObject = Users[el];
        return (
          <ContactCard
            image={images[userObject.id]}
            userInfo={userObject}
            key={userObject.id}
          ></ContactCard>
        );
      })}
    </div>
  );
};

export default Contact;
