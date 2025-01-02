import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BlogsHome from './components/BlogsHome';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogsHome />} />
            {/* <Route path="/blogs/:id" element={<BlogPost />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


