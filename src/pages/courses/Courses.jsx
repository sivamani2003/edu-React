import React from 'react';
import Home from './components/Home';
import CourseHighlight from './components/CourseHighlight';
import YouWillBuild from './components/YouWillBuild';
import WhyAndWhat from './components/WhyAndWhat';

const Courses = () => {
        return (
                <div>
                        <div>
                                <Home></Home>
                        </div>
                        <div>
                                <YouWillBuild></YouWillBuild>
                        </div>
                        <div className='max-w-[1240px] mx-auto'>
                                <CourseHighlight></CourseHighlight>
                        </div>

                        <div className='max-w-[1240px] mx-auto mt-12'>
                                <WhyAndWhat></WhyAndWhat>
                        </div>
                </div>
        );
};

export default Courses;