// LiveStreamPage.js

import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import './LiveStreamPage.css'; // Import the CSS file

const LiveStreamPage = () => {
    const { templeId } = useParams();

    // Map templeId to its corresponding YouTube video ID and name
    const getVideoInfo = (templeId) => {
        switch (templeId) {
            case '1':
                return { videoId: 'W5RpbSVQ-F4', name: 'Sarangpur' };
            case '2':
                return { videoId: 'cisXSIYc-cI', name: 'Somnath' };
            case '3':
                return { videoId: 'KLX0C_OUmaw', name: 'Vadtal' };
            case '4':
                return { videoId: 'wDMVg2kJGxU', name: 'Dwarka' };
            case '5':
                return { videoId: '1R7zj5P69t8', name: 'Kashi Vishwanath' };
            case '6':
                return { videoId: 'e5o7xg_F3Uo', name: 'Ujjain Mahakaleshwar' };
            case '7':
                return { videoId: '9rriS35zQjI', name: 'Siddhivinayak Mumbai' };
            case '8':
                return { videoId: 'VJabdntFLHI', name: 'Shirdi' };
            // Add more cases for other temples
            default:
                return { videoId: '', name: '' };
        }
    };

    // Get the YouTube video ID and name for the specified templeId
    const { videoId, name } = getVideoInfo(templeId);

    // Construct the URL for embedding the YouTube live stream
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&iv_load_policy=3`;

    // Ref for the iframe element
    const iframeRef = useRef(null);

    // Function to toggle full screen
    const toggleFullScreen = () => {
        if (iframeRef.current) {
            if (iframeRef.current.requestFullscreen) {
                iframeRef.current.requestFullscreen();
            } else if (iframeRef.current.mozRequestFullScreen) {
                iframeRef.current.mozRequestFullScreen();
            } else if (iframeRef.current.webkitRequestFullscreen) {
                iframeRef.current.webkitRequestFullscreen();
            } else if (iframeRef.current.msRequestFullscreen) {
                iframeRef.current.msRequestFullscreen();
            }
        }
    };

    return (
        <div className="live-stream-container">
            <h1 className="live-stream-title">Live Stream for {name}</h1>
            {/* Render the embedded YouTube player */}
            <iframe
                ref={iframeRef}
                className="live-stream-player"
                src={embedUrl}
                title="YouTube Live Stream Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            {/* Full screen button */}
            <button className="full-screen-button" onClick={toggleFullScreen}>
                Full Screen
            </button>
        </div>
    );
};

export default LiveStreamPage;
