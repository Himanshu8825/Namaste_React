import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Resturant from './components/Resturant';

const App = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path='/resturant/:resId' element={<Resturant />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
