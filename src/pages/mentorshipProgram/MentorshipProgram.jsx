import React from 'react';
import './Mentorship.css'
import Questions from './components/Questions';
import WhyMentorship from './components/WhyMentorship';
import HowWorks from './components/HowWorks';
import Banner from './components/Banner';

const MentorshipProgram = () => {
        return (
                <div>
                        <div>
                                <Banner></Banner>
                        </div>

                        <div>
                                <HowWorks></HowWorks>
                        </div>

                        <div className='my-20'>
                                <WhyMentorship></WhyMentorship>
                        </div>

                        <div>
                                <Questions></Questions>
                        </div>
                </div>
        );
};

export default MentorshipProgram;