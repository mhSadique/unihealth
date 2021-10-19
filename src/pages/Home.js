import React from 'react';
import Branding from '../components/Branding';
import CancerServices from '../components/CancerServices';
import Footer from '../components/Footer';
import GeneralServices from '../components/GeneralServices';
import Navbar from '../components/Navbar';
import SpecialtyServices from '../components/SpecialtyServices';
import TopBanner from '../components/TopBanner';
import TopHeader from '../components/TopHeader';
import VideoVisit from '../components/VideoVisit';

const Home = () => {
    return (
        <>
            <TopHeader />
            <Navbar />
            <TopBanner />
            <Branding />
            <VideoVisit />
            <GeneralServices />
            <CancerServices />
            <SpecialtyServices />
            <Footer />
        </>
    );
};

export default Home;