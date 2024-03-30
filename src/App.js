import React from 'react';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import About from './pages/about/about';
import './App.css';
import Footer from './components/footer/footer';
import Contact from './pages/contact/contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
