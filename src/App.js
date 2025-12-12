import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home';
import Plans from './pages/Plans';
import SkilledVillagers from './pages/SkilledVillagers';
import Schemes from './pages/Schemes';
import Gallery from './pages/Gallery';
import BeforeAfter from './pages/BeforeAfter';
import AboutVillage from './pages/AboutVillage';
import AboutCandidate from './pages/AboutCandidate';
import Contact from './pages/Contact';

// Utils
import { getTheme, setTheme } from './utils/api';

function App() {
  const [theme, setThemeState] = useState('light');

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = getTheme();
    setThemeState(savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(newTheme);
    setTheme(newTheme);
  };

  return (
    <Router>
      <div className="App" data-bs-theme={theme}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/skilled-villagers" element={<SkilledVillagers />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/before-after" element={<BeforeAfter />} />
            <Route path="/about-village" element={<AboutVillage />} />
            <Route path="/about-candidate" element={<AboutCandidate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
