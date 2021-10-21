/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import ProfileInfo from './ProfileInfo';
import '../styles/Navbar.css';
import useFirebase from '../hooks/useFirebase';

const Navbar = () => {
    useFirebase();
    return (
        <nav>
            <div className="nav-container">
                <Logo />
                <div className="nav-info">
                    <NavLinks />
                    <ProfileInfo />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;