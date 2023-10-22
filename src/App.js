import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResturantMenu from './pages/ResturantMenu';
import Landing from './pages/Landing'
import New from './components/newMenu/New'

function App() {
;

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/menu" element={<ResturantMenu />} />
        <Route path="/newMenu" element={<New/>} />
      </Routes>
    </div>
  );
}

export default App;
