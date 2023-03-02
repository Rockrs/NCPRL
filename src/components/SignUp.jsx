import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import './SignUp.scss';

const Signup = () => {
  const [userProfile, setUserProfile] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTryAgain, setTryAgain] = useState(true);
  const navigate = useNavigate();

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const reloadSignUpForm = () => {
    setError(null);
    setTryAgain(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTryAgain(false);
    createUserWithEmailAndPassword(
      auth,
      userProfile.email,
      userProfile.password
    )
      .then(function (result) {
        return updateProfile(result.user, {
          displayName: userProfile.fullName,
        });
      })
      .then(() => {
        navigate('/home');
      })
      .catch(function (error) {
        setError(error.message);
        setTryAgain(false);
        setLoading(false);
      });
  };

  return (
    <div className='register-container'>
      {loading && <div className='spinner-border loader' role='status'></div>}
      {error && (
        <div className='alert alert-danger error' role='alert'>
          {error}
          <button onClick={reloadSignUpForm}>Try Again</button>
        </div>
      )}
      <div style={{ width: '100%' }}>
        <h2 className='mb-4 mt-4'>Register Here</h2>

        <form>
          <div className='mb-3 form-group' id='Email'>
            <input
              type='email'
              name='email'
              placeholder='Email address'
              onChange={(e) => inputChangeHandler(e)}
              className='form-control'
            />
          </div>

          <div className='mb-3 form-group' id='Password'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={(e) => inputChangeHandler(e)}
              className='form-control'
            />
          </div>

          <div className='mb-3 form-group' id='FullName'>
            <input
              type='text'
              name='fullName'
              placeholder='Full Name'
              onChange={(e) => inputChangeHandler(e)}
              className='form-control'
            />
          </div>

          <div className='d-grid gap-2'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleSubmit}
              disabled={!isTryAgain ? true : false}
            >
              Sign up
            </button>
          </div>
        </form>
        <div className='p-1 box mt-3 text-center'>
          Already have an account? <Link to='/sign-in'>Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
