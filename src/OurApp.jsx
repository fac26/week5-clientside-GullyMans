import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './Home';
import Game from './App';

function OurApp() {
  const [name, setName] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home name={name} setName={setName} />} />
        <Route path="game" element={<Game name={name} />} />
      </Routes>
    </Router>
  );
}

export default OurApp;
