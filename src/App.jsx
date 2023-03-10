import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './Context/AuthContext';
import { Routes, Route } from 'react-router-dom';
import UnRegisterLandingPage from './components/UnRegisterLandingPage';
import Register from './components/Register';
import Login from './components/LogIn';
import ProtectedRoute from './components/ProtectedRoutes';
import UserHome from './components/UserHome';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Profile from './components/Profile';
import './App.scss';

export default function App() {
  const { user, userLoading } = useContext(UserContext);

  return (
    <>
      {userLoading ? (
        <div className='spinner-border loader' role='status'></div>
      ) : (
        <>
          <Navbar></Navbar>
          {user && <SideBar></SideBar>}

          <Routes>
            <Route
              path='/'
              element={
                !user ? <UnRegisterLandingPage /> : <UserHome></UserHome>
              }
            ></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route
              path='user-home'
              element={
                <ProtectedRoute>
                  <UserHome></UserHome>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path='profile'
              element={
                <ProtectedRoute>
                  <Profile></Profile>
                </ProtectedRoute>
              }
            ></Route>
            <Route path='contact-us' element={<Contact />}></Route>
            <Route path='about-us' element={<About />}></Route>
          </Routes>
        </>
      )}
    </>
  );
}
