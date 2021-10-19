import React from 'react';
import image from '../assets/images/doctors.jpg';

const SingleServiceDetail = () => {
    return (
        <div className="single-topic-detail">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="text">
                <h3>Our approach to pediatrics</h3>
                <p>At UCLA Health, we provide innovative health care services from birth to 21 that focus on your child’s specific needs. Our pediatric and family medicine physicians deliver:

                    Child-friendly care: Our experienced specialists provide the latest in pediatric care.

                    Partnership: We collaborate with families to help their children flourish as they grow. Our pediatric physicians are available to address every need, with compassion.</p>
            </div>
        </div>
    );
};

export default SingleServiceDetail;