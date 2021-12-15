import React from 'react';
import Banner from '../Banner/Banner'
import BlogReview from '../BlogReview/BlogReview';
import Brand from '../Brand/Brand';
import CSFProducts from '../CSFProducts/CSFProducts';
import NewArriaval from '../NewArriaval/NewArriaval';
import OurService from '../OurService/OurService';
import PayDebit from '../PayDebit/PayDebit';
import ProductBanner from '../ProductBanner/ProductBanner';
import ProductOfferSlider from '../ProductOfferSlider/ProductOfferSlider'
import TopProducts from '../TopProducts/TopProducts';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <ProductBanner></ProductBanner>
            <ProductOfferSlider></ProductOfferSlider>
            <PayDebit></PayDebit>
            {/* <NewArriaval></NewArriaval>
            <CSFProducts></CSFProducts> */}
            <TopProducts></TopProducts>
            <BlogReview></BlogReview>
            <Brand></Brand>
        </div>
    );
};

export default Home;