import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Cycles from './pages/Cycles';
import StudentLife from './pages/StudentLife';
import Contact from './pages/Contact';
import Visit from './pages/Visit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="notre-ecole" element={<About />} />
          <Route path="nos-cycles" element={<Cycles />} />
          <Route path="vie-etudiante" element={<StudentLife />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contactez-nous" element={<Contact />} />
          <Route path="visite" element={<Visit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
