/*
import React from 'react';
import './App.scss';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import Contact from './components/Contact/Contact.js';
import Offre from './components/Offre/Offre.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import sal from 'sal.js';

function App() {
  return (
    <div className="App">
      <Home/>
      <Offre/>
      <Contact/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
*/

import React, { Component } from 'react';
import './App.scss';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import Contact from './components/Contact/Contact.js';
import Offre from './components/Offre/Offre.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import sal from 'sal.js';
import 'sal.js/dist/sal.css';


export class App extends Component {
  componentDidMount(){
    sal();
  }
  render() {
    return (
      <div className="App">
        <Home />
        <Offre />
        <Contact />
        <About />
        <Footer />
      </div>
    )
  }
}

export default App

