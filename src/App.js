import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResturantMenu from './pages/ResturantMenu';
import Landing from './pages/Landing'
import AboutPage from './pages/AboutPage';
function App() {
;

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/menu" element={<ResturantMenu />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
