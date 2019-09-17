import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import Contact from './components/Contact/Contact.js';
import Test from './components/Test/Test.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer.js';


import Home from './components/Home/Home.js';

function App() {
  return (
    <div className="App">
      <Home/>
      <Test/>
      <Contact/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
