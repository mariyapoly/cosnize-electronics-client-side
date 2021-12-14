import React from 'react';
import HeaderTop from '../../Share/HeaderTop/HeaderTop';
import Navigation from '../../Share/Navigation/Navigation';
import Banner from '../Banner/Banner'
import OurService from '../OurService/OurService';
import ProductBanner from '../ProductBanner/ProductBanner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <Navigation></Navigation>
            <Banner></Banner>
            <OurService></OurService>
            <ProductBanner></ProductBanner>
        </div>
    );
};

export default Home;