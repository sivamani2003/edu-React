import React from 'react';
import MentorshipProgram from './pages/mentorshipProgram/MentorshipProgram';
import Courses from './pages/courses/Courses';
import Footer from './pages/footer/Footer'
import Hire from './pages/hire/components/Hire'
import HireFromUs from './pages/hireFromUs/HireFromUs';

const App = () => {
  return (
    <div>
      {/* <Courses></Courses>
      <MentorshipProgram></MentorshipProgram>
      <Footer></Footer>
      <Hire></Hire> */}
      <HireFromUs></HireFromUs>
    </div>
  );
};

export default App;