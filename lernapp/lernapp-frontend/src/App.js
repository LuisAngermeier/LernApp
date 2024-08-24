// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer'; // Import Footer
import Navbar from './components/Navbar'; // Import Navbar

function App() {
    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar /> {/* Add Navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts/:fach" element={<Posts />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer /> {/* Add Footer */}
            </div>
        </Router>
    );
}

export default App;
