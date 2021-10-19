/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom';

const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <Link to="/login">Login</Link>
            <Link to="">Logout</Link>
            <Link to="/register">Register</Link>
            <span className="name">Sadique</span>
            <img src="https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/FL463_Explore_industries_-_Healthcare_blog_header.jpg"
                alt="Image" />
        </div>
    );
};

export default ProfileInfo;