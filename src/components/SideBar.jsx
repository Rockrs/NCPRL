import React, { useContext, useEffect, useRef } from 'react';
import { UserContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import useGetProfile from '../hooks/useGetProfile';
import useUploadImage from '../hooks/useUploadImage';
import Close from '../assests/close.png';
import './SideBar.scss';

const SideBar = () => {
  const { user } = useContext(UserContext);
  const { getProfileData, data } = useGetProfile();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { uploadImage, imageUrl } = useUploadImage();

  const closeProfileModal = () => {
    const Modal = document.getElementsByClassName('modal')[0];
    Modal.classList.remove('show');
    const userProfileInfo = document.getElementsByClassName('profile-info')[0];
    userProfileInfo?.style.removeProperty('animation', 'mymove 5s');
  };

  const redirectToProfileForm = () => {
    closeProfileModal();
    navigate('/profile');
  };

  const handleChange = (event) => {
    if (event.target.files) {
      uploadImage(event.target.files[0], user.uid);
    }
  };

  useEffect(() => {
    const unsubscribe = getProfileData(user.uid);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <input
        type='file'
        onChange={handleChange}
        ref={inputRef}
        style={{ display: 'none' }}
      />
      <div className='modal'>
        <button className='close-modal' onClick={closeProfileModal}>
          <img src={Close} alt='close-btn' />
        </button>
        <div className='wrapper'>
          <div className='avatar' onClick={() => inputRef.current.click()}>
            <img
              src={imageUrl || JSON.parse(localStorage.getItem('profile-pic'))}
              alt='Profile'
            ></img>
          </div>
          <h3>{user.displayName}</h3>
          <hr></hr>
          {!data && (
            <button onClick={redirectToProfileForm}>Add Profile Data</button>
          )}
          {data && (
            <div className='profile-info' id='profile-info'>
              <div className='email'>
                <div className='heading'>Email</div>
                <div className='content'>{user.email}</div>
              </div>
              <div className='mobile'>
                <div className='heading'>Mobile</div>
                <div className='content'>{data.mobile}</div>
              </div>
              <div className='age'>
                <div className='heading'>Age</div>
                <div className='content'>{data.age}</div>
              </div>
              <div className='role'>
                <div className='heading'>Role</div>
                <div className='content'>{data.role}</div>
              </div>
              <div className='club'>
                <div className='heading'>Club</div>
                <div className='content'>{data.club}</div>
              </div>
              <div className='aadhar'>
                <div className='heading'>Aadhar</div>
                <div className='content'>{data.aadhar}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
