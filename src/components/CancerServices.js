/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/CancerServices.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const CancerServices = () => {
    return (
        <section className="cancer-services">
        <h3>Cancer Services</h3>
        <div className="cancer-services-container">
            <div className="service">
                <a href="">Brain <FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
            <div className="service">
                <a href="">Brain <FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
            <div className="service">
                <a href="">Brain <FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
            <div className="service">
                <a href="">Brain <FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
        </div>
    </section>
    );
};

export default CancerServices;