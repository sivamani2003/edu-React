import React from 'react';
import OtherCourse from '../../../othersCourse/OtherCourse'

const CardBase = () => {
  return (
    <div className='my-10 md:my-20'>
      <h1 className='text-center text-lg md:text-5xl font-bold'>Other <span className='text-pink'>Courses</span></h1>
      <OtherCourse></OtherCourse>
    </div>
  );
};

export default CardBase;