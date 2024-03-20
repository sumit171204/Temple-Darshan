// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import temple1Image from '../images/sarangpur.jpeg';
import temple2Image from '../images/somnath.jpg';
import temple3Image from '../images/vadtal.jpg';
import temple4Image from '../images/dwarka.jpg';
import temple5Image from '../images/kashi.jpg';
import temple6Image from '../images/ujjain.jpg';
import temple7Image from '../images/siddhivinayak_mumbai.jpg';
import temple8Image from '../images/shirdi.jpg';




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
                    <div className="temple-card">
                        <Link to={`/live/5`}>
                            <img src={temple5Image} alt="Kashi" />
                            <p className="temple-name">Kashi Vishwanath</p>
                        </Link>
                    </div>
                    <div className="temple-card">
                        <Link to={`/live/6`}>
                            <img src={temple6Image} alt="Ujjain" />
                            <p className="temple-name">Ujjain Mahakaleshwar</p>
                        </Link>
                    </div>
                    <div className="temple-card">
                        <Link to={`/live/7`}>
                            <img src={temple7Image} alt="Siddhivinayak Mumbai" />
                            <p className="temple-name">Siddhivinayak Mumbai</p>
                        </Link>
                    </div>
                    <div className="temple-card">
                        <Link to={`/live/8`}>
                            <img src={temple8Image} alt="Shirdi" />
                            <p className="temple-name">Shirdi</p>
                        </Link>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default HomePage;
