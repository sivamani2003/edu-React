import React from 'react';
import MeetOurExp from './components/expertsPage/MeetOurExp';
import Platform from './components/platformPage/Platform';
import Section from './components/Section/Section';
import CardBase from './components/card/CardBase'
import Banner from './components/banner/Banner';
import Card from './components/card/Card';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Section></Section>
                <MeetOurExp></MeetOurExp>
            </div>
            <div className='max-w-7xl mx-auto'>
                <Platform></Platform>
                <Card></Card>
                <CardBase></CardBase>
            </div>
        </div>
    );
};

export default Home;