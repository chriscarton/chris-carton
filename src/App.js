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
import Typed from 'typed.js';

import 'sal.js/dist/sal.css';


export class App extends Component {
  
  componentDidMount(){
    this.faireDuSal();
    this.initTyped();
  }

  initTyped(){
    
    let element = document.querySelector('#Typed');
    element.addEventListener('sal:in', ({ detail }) => {
      let text = element.textContent;
      element.textContent = '';

      var options = {
        strings: [text],
        typeSpeed: 60,
        showCursor: false
      }

      var typed = new Typed("#Typed", options);
    });
      
  }

  faireDuSal(){

    sal({ threshold: 0.3 });

    //Selectionne tous les items
    const elements = document.querySelectorAll('.item');
    elements.forEach((element) => {
      //Lorsqu'un élément est animé par SAL (au scroll) : 
      element.addEventListener('sal:in', ({ detail }) => {
        let target = detail.target;

        //On va chercher le titre
        let title = target.querySelector('.title');
        //On ajoute une classe qui comporte une animation :
        title.classList.add('animation');

        //On pourrait faire de même pour l'image et le texte...
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Home />
        <Offre />
        <Contact />
        {/* <About /> */}
        <Footer />
      </div>
    )
  }
}

export default App

