import React from 'react';
import Home from './components/Home';
import CourseHighlight from './components/CourseHighlight';
import YouWillBuild from './components/YouWillBuild';
import WhyAndWhat from './components/WhyAndWhat';
import TrainingWorks from './components/TrainingWorks';
import Questions from './components/Questions';
import MySwiper from './components/MySwiper';

const Courses = () => {
        return (
                <div>
                        <div>
                                <Home></Home>
                        </div>
                        <div className='max-w-[1240px] mx-auto'>
                                <YouWillBuild></YouWillBuild>
                        </div>
                        <div className='max-w-[1400px] mx-auto mt-12'>
                                <CourseHighlight></CourseHighlight>
                        </div>

                        <div className='max-w-[1400px] mx-auto mt-12'>
                                <WhyAndWhat></WhyAndWhat>
                        </div>

                        <div className='max-w-[1400px] mx-auto mt-12'>
                                <TrainingWorks></TrainingWorks>
                        </div>

                        <div className='max-w-[1400px] mx-auto mt-12'>
                                <Questions></Questions>
                        </div>

                        <div className='max-w-[1400px] mx-auto mt-12'>
                                <MySwiper></MySwiper>
                        </div>
                </div>
        );
};

export default Courses;