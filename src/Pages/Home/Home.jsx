import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularSection from './PopularSection/PopularSection';
import Feature from '../Feature/Feature';
import Testimonials from './TESTIMONIALS/Testimonials';
import Cover from '../../SheadComponent/Cover/Cover';


const Home = () => {
    return (
        <div>
       
            <Banner></Banner>
            <Category></Category>
            <PopularSection></PopularSection>
            <Feature></Feature>
            <Testimonials></Testimonials>
           
        </div>
    );
};

export default Home;