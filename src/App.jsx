import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './Context/AuthContext';
import { Routes, Route } from 'react-router-dom';
import UnRegisterLandingPage from './components/UnRegisterLandingPage';
import Signup from './components/SignUp';
import SignIn from './components/LogIn';
import ProtectedRoute from './components/ProtectedRoutes';
import UserHome from './components/UserHome';
import Contact from './components/Contact';
import './App.scss';

export default function App() {
  const { userLoading } = useContext(UserContext);

  return (
    <>
      {userLoading ? (
        <div className='spinner-border loader' role='status'></div>
      ) : (
        <Routes>
          <Route path='/' element={<UnRegisterLandingPage />}></Route>
          <Route path='register' element={<Signup />}></Route>
          <Route path='sign-in' element={<SignIn />}></Route>
          <Route
            path='home'
            element={
              <ProtectedRoute>
                <UserHome></UserHome>
              </ProtectedRoute>
            }
          ></Route>
          <Route path='contact-us' element={<Contact />}></Route>
        </Routes>
      )}
    </>
  );
}
