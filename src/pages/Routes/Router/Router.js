import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../../Layout/Main/DashboardLayout/DashboardLayout";
import Main from "../../../Layout/Main/Main";
import Appointment from "../../Appointment/Appointment/Appointment";
import AddDoctor from "../../Dashboard/AddDoctor/AddDoctor";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import MyAppointment from "../../Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../Dashboard/ÂllUsers/AllUsers";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login/Login";
import Signup from "../../Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <MyAppointment></MyAppointment>
            },
            {
                path: "/dashboard/allusers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "/dashboard/adddoctor",
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
        ]
    },
    {
        path: '*', element: <ErrorPage></ErrorPage>
    }
])

export default router;