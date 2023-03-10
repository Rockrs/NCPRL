import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogInUser from '../hooks/useLogInUser';
import './LogIn.scss';

const Login = () => {
  const [userCredential, setuserCredential] = useState({
    email: '',
    password: '',
  });

  const { loading, error, isTryAgain, loginUser, setError, setTryAgain } =
    useLogInUser();

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setuserCredential({ ...userCredential, [name]: value });
  };

  const reloadSignInForm = () => {
    setError(null);
    setTryAgain(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser(userCredential);
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

export default Login;
