import { useState } from 'react';
import useUpdateProfile from '../hooks/useUpdateProfile';
import './Profile.scss';

const Profile = () => {
  const [data, setdata] = useState({});
  const { loading, error, updateProfile, setError, setTryAgain, isTryAgain } =
    useUpdateProfile();

  const inputChangeHandler = (event) => {
    const { name } = event.target;
    setdata({ ...data, [name]: event.target.value });
  };

  const reloadProfileForm = () => {
    setError(null);
    setTryAgain(true);
  };

  const sumbitHandler = async (e) => {
    e.preventDefault();
    updateProfile(data);
  };
  return (
    <div className='profile-update-container'>
      {loading && <div className='spinner-border loader' role='status'></div>}
      {error && (
        <div className='alert alert-danger error' role='alert'>
          {error}
          <button onClick={reloadProfileForm}>Try Again</button>
        </div>
      )}
      <form style={{ width: '100%' }}>
        <div className='mb-3 form-group' id='role'>
          <input
            type='text'
            name='role'
            placeholder='Role'
            onChange={(e) => inputChangeHandler(e)}
            className='form-control'
          />
        </div>
        <div className='mb-3 form-group' id='Mobile'>
          <input
            type='text'
            name='mobile'
            placeholder='Mobile'
            onChange={(e) => inputChangeHandler(e)}
            className='form-control'
          />
        </div>
        <div className='mb-3 form-group' id='Age'>
          <input
            type='text'
            name='age'
            placeholder='Age'
            onChange={(e) => inputChangeHandler(e)}
            className='form-control'
          />
        </div>
        <div className='mb-3 form-group' id='Club-Name'>
          <input
            type='text'
            name='club'
            placeholder='Club'
            onChange={(e) => inputChangeHandler(e)}
            className='form-control'
          />
        </div>
        <div className='mb-3 form-group' id='Aadhar'>
          <input
            type='text'
            name='aadhar'
            placeholder='Aadhar'
            onChange={(e) => inputChangeHandler(e)}
            className='form-control'
          />
        </div>
        <div className='mb-3 form-group' id='Location'>
          <input
            type='text'
            name='location'
            placeholder='Location'
            onChange={(e) => inputChangeHandler(e)}
            className='form-control'
          />
        </div>
        <div className='d-grid gap-2'>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={sumbitHandler}
            disabled={!isTryAgain ? true : false}
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
