import React from 'react';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import About from './pages/about/about';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
