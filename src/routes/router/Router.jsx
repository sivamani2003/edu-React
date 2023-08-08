import { createBrowserRouter } from "react-router-dom";
import Prime from "../../layout/Prime";
import Home from "../../pages/home/Home";

// Courses
import Mern from '../../pages/courses/mern/Mern'
import Python from '../../pages/courses/python/Python'
import Android from '../../pages/courses/android/Android'
import Analytics from "../../pages/courses/analytics/Analytics";

// Mentorship
import MentorshipProgram from '../../pages/mentorshipProgram/MentorshipProgram'

import OtherCourses from '../../pages/othersCourse/OtherCourse'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Prime></Prime>,
        children: [


            // courses related routes
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/mern',
                element: <Mern></Mern>
            },
            {
                path: '/python',
                element: <Python></Python>
            },
            {
                path: '/analytics',
                element: <Analytics></Analytics>
            },
            {
                path: '/android',
                element: <Android></Android>
            },


            // mentorship route
            {
                path: '/mentorship',
                element: <MentorshipProgram></MentorshipProgram>
            },
            {
                path: '/other',
                element: <OtherCourses></OtherCourses>
            },
        ]
    },
]);

export default router