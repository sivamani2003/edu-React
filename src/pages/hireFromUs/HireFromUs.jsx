import React from 'react';
import WhyChooseUs from './components/WhyChooseUs';
import Banner from './components/Banner';
import HiringPartners from './components/HiringPartners';
import FAQS from './components/FAQS';
import Partners from '../Partners/Partners'
import NewsLetter from '../NewsLetter/NewsLetter'
import Brands from '../../Najim/Brands'
import Marketing from '../../Najim/Marketing'
import Roles from '../../Najim/Roles'
import Skilled from '../skilled/Skilled';

const HireFromUs = () => {
        return (
                <div>
                        <Banner></Banner>
                        <Partners></Partners>
                        <Brands></Brands>
                        <Marketing></Marketing>
                        <Roles></Roles>
                        <HiringPartners></HiringPartners>
                        <NewsLetter></NewsLetter>
                        <WhyChooseUs></WhyChooseUs>
                        <Skilled></Skilled>
                        <FAQS></FAQS>
                </div>
        );
};

export default HireFromUs;