import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ServiceDetailBanner from '../components/ServiceDetailBanner';
import ServiceDetailMain from '../components/ServiceDetailMain';
import TopHeader from '../components/TopHeader';

const ServiceDetail = () => {
    return (
        <>
          <TopHeader />
          <Navbar />  
          <ServiceDetailBanner />
          <ServiceDetailMain />
          <Footer />
        </>
    );
};

export default ServiceDetail;