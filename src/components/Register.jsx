import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useRegisterUser from '../hooks/useRegisterUser';
import './Register.scss';

const Register = () => {
  const [userCredential, setuserCredential] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const { loading, error, isTryAgain, registerUser, setError, setTryAgain } =
    useRegisterUser();

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setuserCredential({ ...userCredential, [name]: value });
  };

  const reloadRegisterForm = () => {
    setError(null);
    setTryAgain(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(userCredential);
  };

  return (
    <div className='register-container'>
      {loading && <div className='spinner-border loader' role='status'></div>}
      {error && (
        <div className='alert alert-danger error' role='alert'>
          {error}
          <button onClick={reloadRegisterForm}>Try Again</button>
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
              Register
            </button>
          </div>
        </form>
        <div className='p-1 box mt-3 text-center'>
          Already have an account? <Link to='/login'>LogIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
