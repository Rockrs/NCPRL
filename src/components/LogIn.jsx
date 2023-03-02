import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './LogIn.scss';

const SignIn = () => {
  const [userProfile, setUserProfile] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTryAgain, setTryAgain] = useState(true);
  const navigate = useNavigate();

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const reloadSignInForm = () => {
    setError(null);
    setTryAgain(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTryAgain(false);
    signInWithEmailAndPassword(auth, userProfile.email, userProfile.password)
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
    <div className='login-container'>
      {loading && <div className='spinner-border loader' role='status'></div>}
      {error && (
        <div className='alert alert-danger error' role='alert'>
          {error}
          <button onClick={reloadSignInForm}>Try Again</button>
        </div>
      )}
      <div style={{ width: '100%' }}>
        <h2 className='mb-4 mt-4'>Enter Your Details</h2>
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

          <div className='d-grid gap-2'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleSubmit}
              disabled={!isTryAgain ? true : false}
            >
              Login
            </button>
          </div>
        </form>
        <div className='p-1 box mt-3 text-center'>
          New User? <Link to='/register'>Register Here</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
