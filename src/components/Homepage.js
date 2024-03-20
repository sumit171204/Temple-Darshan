// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import temple1Image from '../images/sarangpur.jpeg';
import temple2Image from '../images/somnath.jpg';
import temple3Image from '../images/vadtal.jpg';
import temple4Image from '../images/dwarka.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCalendar } from '@fortawesome/free-solid-svg-icons';

import './Homepage.css'; // Import the CSS file

const HomePage = () => {
    return (
        <div className="homepage-container">
            {/* Banner */}
            <div className="banner">
                {/* Add your banner component here */}
                <h1>Live Stream from Prominent Temple</h1>
                {/* Add live stream player or image here */}
            </div>
            
            {/* Grid of Popular Temples */}
            <div className="popular-temples">
                <h2>Popular Temples</h2>
                <div className="temple-grid">
                    <div className="temple-card">
                        <Link to={`/live/1`}>
                            <img src={temple1Image} alt="Sarangpur" />
                            <p className="temple-name">Sarangpur</p>
                        </Link>
                    </div>
                    <div className="temple-card">
                        <Link to={`/live/2`}>
                            <img src={temple2Image} alt="Somnath" />
                            <p className="temple-name">Somnath</p>
                        </Link>
                    </div>
                    <div className="temple-card">
                        <Link to={`/live/3`}>
                            <img src={temple3Image} alt="Vadtal" />
                            <p className="temple-name">Vadtal</p>
                        </Link>
                    </div>
                    <div className="temple-card">
                        <Link to={`/live/4`}>
                            <img src={temple4Image} alt="Dwarka" />
                            <p className="temple-name">Dwarka</p>
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Navbar with icons at the bottom */}
            <div className="navbar">
                <Link to="/favorites">
                    <FontAwesomeIcon icon={faHeart} />
                </Link>
                <Link to="/events">
                    <FontAwesomeIcon icon={faCalendar} />
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
