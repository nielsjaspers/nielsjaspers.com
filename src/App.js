import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BlogsHome from './components/BlogsHome';
import './App.css';

const BlogPostTest = React.lazy(() => import('./blogs/BlogTest'));

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/blogs" element={<BlogsHome />} />

                            {/* Blogpost routing */}
                            <Route path="/blogs/test-blog" element={<BlogPostTest />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </Router>
    );
}

export default App;


