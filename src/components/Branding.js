import React from 'react';
import '../styles/Branding.css';
import image from '../assets/images/doctors.png'

const Branding = () => {
    return (
        <section className="branding">
        <div className="branding-container">
            <div className="text">
                <h2>#1 in California</h2>
                <p className="big-para">and top 3 in the nation – our ranking gives you and your family the confidence you
                    need.</p>
                <p className="small-para">Where you go for health care matters.</p>
                <button>Discover More</button>
            </div>
            <div className="image">
                <img src={image} alt="Doctors"/>
            </div>
        </div>
    </section>
    );
};

export default Branding;