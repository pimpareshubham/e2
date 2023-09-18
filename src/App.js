import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/Home.css';
import './styles/Header.css';
import './styles/Footer.css';
import Home from './Home';
import NotFound from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
