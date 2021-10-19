import React from 'react';
import image from '../assets/images/doctors.png'
import '../styles/GeneralServices.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const GeneralServices = () => {
    return (
        <section className="general-services">
        <h3>Our Frequently Taken Services</h3>
        <div className="general-services-container">
            <div className="service">
                <img src={image} alt="Doctor"/>
                <h4>Pediatrics</h4>
                <p>At UCLA Health, we partner with families to deliver expert, compassionate care to infants, children
                    and teens.</p>
                <button>Learn More <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
            <div className="service">
                <img src={image} alt="Doctor"/>
                <h4>Pediatrics</h4>
                <p>At UCLA Health, we partner with families to deliver expert, compassionate care to infants, children
                    and teens.</p>
                <button>Learn More <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
            <div className="service">
                <img src={image} alt="Doctor"/>
                <h4>Pediatrics</h4>
                <p>At UCLA Health, we partner with families to deliver expert, compassionate care to infants, children
                    and teens.</p>
                <button>Learn More <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
            <div className="service">
                <img src={image} alt="Doctor"/>
                <h4>Pediatrics</h4>
                <p>At UCLA Health, we partner with families to deliver expert, compassionate care to infants, children
                    and teens.</p>
                <button>Learn More <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    </section>
    );
};

export default GeneralServices;