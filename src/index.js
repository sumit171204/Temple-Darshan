// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import HomePage from './components/Homepage';
import LiveStreamPage from './components/LiveStreamPage';

const App = () => {
    return (
        <Router>
            <Routes> {/* Wrap Routes */}
                <Route exact path="/" element={<HomePage />} /> {/* Use element prop */}
                <Route path="/live/:templeId" element={<LiveStreamPage />} /> {/* Use element prop */}
            </Routes>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
