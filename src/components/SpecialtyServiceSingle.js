/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const SpecialtyServiceSingle = ({service}) => {
    return (
        <div className="service">
            <a href="" className='service-link'>{service} </a>
            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
        </div>
    );
};

export default SpecialtyServiceSingle;