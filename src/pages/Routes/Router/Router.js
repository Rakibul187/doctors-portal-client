import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../../Layout/Main/DashboardLayout/DashboardLayout";
import Main from "../../../Layout/Main/Main";
import Appointment from "../../Appointment/Appointment/Appointment";
import AddDoctor from "../../Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Dashboard/MyAppointment/MyAppointment";
import Payment from "../../Dashboard/Payment/Payment";
import AllUsers from "../../Dashboard/ÂllUsers/AllUsers";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login/Login";
import DisplayError from "../../shared/DisplayError/DisplayError";
import Signup from "../../Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        errorElement: <DisplayError></DisplayError>,
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
            {
                path: "/dashboard/managedoctors",
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: "/dashboard/payment/:id",
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    }
])

export default router;