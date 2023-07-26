import React from 'react';
import Home from './components/Home';
import CourseHighlight from './components/CourseHighlight';

const Courses = () => {
        return (
                <div>
                        <div>
                                <Home></Home>
                        </div>
                        <div className='max-w-[1240px] mx-auto'>
                                <CourseHighlight></CourseHighlight>
                        </div>
                </div>
        );
};

export default Courses;