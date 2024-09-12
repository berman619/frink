import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Samples from './components/Samples';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutUs />
        <Services />
        <Samples />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;