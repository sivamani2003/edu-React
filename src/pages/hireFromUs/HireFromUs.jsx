import React from 'react';
import WhyChooseUs from './components/WhyChooseUs';
import Banner from './components/Banner';
import HiringPartners from './components/HiringPartners';
import FAQS from './components/FAQS';

const HireFromUs = () => {
        return (
                <div>
                        {/* <WhyChooseUs></WhyChooseUs> */}
                        <Banner></Banner>
                        <HiringPartners></HiringPartners>
                        <FAQS></FAQS>
                </div>
        );
};

export default HireFromUs;