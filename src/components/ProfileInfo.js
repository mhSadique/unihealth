/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <a href="#">Login</a>
            <a href="#">Logout</a>
            <a href="#">Register</a>
            <span className="name">Sadique</span>
            <img src="https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/FL463_Explore_industries_-_Healthcare_blog_header.jpg"
                alt="Image" />
        </div>
    );
};

export default ProfileInfo;