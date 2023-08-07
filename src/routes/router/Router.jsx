import { createBrowserRouter } from "react-router-dom";
import Prime from "../../layout/Prime";
import Home from "../../pages/home/Home";

// Courses
import Mern from '../../pages/courses/mern/Mern'
import Python from '../../pages/courses/python/Python'
import Dsa from '../../pages/courses/dsa/Dsa'
import Android from '../../pages/courses/android/Android'

// Mentorship
import MentorshipProgram from '../../pages/mentorshipProgram/MentorshipProgram'

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
                path: '/dsa',
                element: <Dsa></Dsa>
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
        ]
    },
]);

export default router