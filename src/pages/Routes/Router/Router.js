import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import Appointment from "../../Appointment/Appointment/Appointment";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login/Login";
import Signup from "../../Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <Signup></Signup>
            },
            {
                path: '/appointment', element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '*', element: <ErrorPage></ErrorPage>
    }
])

export default router;