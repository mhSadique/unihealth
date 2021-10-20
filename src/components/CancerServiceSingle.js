/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CancerServiceSingle = ({service}) => {
    return (
        <div className="service">
            <a href="" className='service-link'>{service} </a>
            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
        </div>
    );
};

export default CancerServiceSingle;