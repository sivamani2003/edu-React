import React from 'react';
import MeetOurExp from './components/expertsPage/MeetOurExp';
import Platform from './components/platformPage/Platform';
import Section from './components/Section/Section';
import CardBase from './components/card/CardBase'
import Banner from './components/banner/Banner';
import Card from './components/card/Card';
import Work from './components/Work/Work';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Section></Section>
            </div>
            <div className='max-w-7xl mx-auto'>
                <Platform></Platform>
                <Card></Card>
                <CardBase></CardBase>
            </div>
            <div>
                <MeetOurExp></MeetOurExp>
                <Work></Work>
            </div>
        </div>
    );
};

export default Home;