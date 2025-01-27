import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularSection from './PopularSection/PopularSection';
import Feature from '../Feature/Feature';
import Testimonials from './TESTIMONIALS/Testimonials';
import Cover from '../../SheadComponent/Cover/Cover';
import CarouselSlider from '../../Component/test';
import AboutBuilding from '../../Component/AllUsers/AboutSection';
import LocationSection from '../../Component/AllUsers/GoogleMap';
import CouponsSection from '../../Component/AllUsers/Cupon';
import CuponsClient from '../../Component/CuponsClient';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (

        <div>

        <Helmet>
        <title>Building Management (BMS)</title>
      </Helmet>
       
            {/* <Banner></Banner> */}
            <CarouselSlider></CarouselSlider>
            <Category></Category>
            {/* <PopularSection></PopularSection> */}
            <Feature></Feature>
            <CuponsClient></CuponsClient>
            <AboutBuilding></AboutBuilding>
            <Testimonials></Testimonials>
            <LocationSection></LocationSection>
            {/* <CouponsSection></CouponsSection> */}
           
        </div>
    );
};

export default Home;