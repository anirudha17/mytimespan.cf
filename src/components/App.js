import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Navbar'
import Time from './Time'
import Footer from './Footer'
import About from './About'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Time />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
