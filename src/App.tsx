import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}
