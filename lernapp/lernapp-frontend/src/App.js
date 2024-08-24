import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer'; 
import Navbar from './components/Navbar'; 

function App() {
    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts/:fach" element={<Posts />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer /> 
            </div>
        </Router>
    );
}

export default App;
