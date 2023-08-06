import { createBrowserRouter } from "react-router-dom";
import Prime from "../../layout/Prime";
import Home from "../../pages/home/Home";
import Courses from "../../pages/courses/Courses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Prime></Prime>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
        ]
    },
]);

export default router