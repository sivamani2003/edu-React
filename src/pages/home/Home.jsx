import React from 'react';
import MeetOurExp from './components/expertsPage/MeetOurExp';
import Platform from './components/platformPage/Platform';
import Section from './components/Section/Section';
import CardBase from './components/card/CardBase'

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Section></Section>
            <MeetOurExp></MeetOurExp>
            <Platform></Platform>
            <CardBase></CardBase>
        </div>
    );
};

export default Home;