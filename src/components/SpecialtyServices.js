/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/SpecialtyServices.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const SpecialtyServices = () => {
    return (
        <section className="specialty-services">
            <h3>Specialty Services</h3>
            <div className="specialty-services-container">
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

export default SpecialtyServices;