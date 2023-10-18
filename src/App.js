import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Landing from './pages/Landing'

function App() {
;

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
