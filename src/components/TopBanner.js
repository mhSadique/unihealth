import React, { useEffect } from 'react';
import '../styles/TopBanner.css';

const TopBanner = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <section className="top-banner">
        <div className="top-banner-container">
            <h2 className="banner-heading">Your best care begins at UniHealth Protection.</h2>
            <div className="banner-btn">
                <button>Find a Doctor</button>
                <button>Find Your Location</button>
                <button>My UniHealth </button>
                <button>Make an Appoinment</button>
            </div>
            <div className="search">
                <input type="search" name="" id="" placeholder="Search UniHealth Protection"/>
            </div>
        </div>
    </section>
    );
};

export default TopBanner;