import React from 'react';
import WhyChooseUs from './components/WhyChooseUs';
import Banner from './components/Banner';
import HiringPartners from './components/HiringPartners';
import FAQS from './components/FAQS';
import Partners from '../Partners/Partners'

const HireFromUs = () => {
        return (
                <div>
                        {/* <WhyChooseUs></WhyChooseUs> */}
                        <Banner></Banner>
                        <Partners></Partners>
                        <FAQS></FAQS>
                </div>
        );
};

export default HireFromUs;