import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import ContactUsMain from "../../Pages/ContactUsMain/ContactUsMain";
import AddDoctor from "../../Pages/Dashboard/Add-Doctor/AddDoctor";
import AllAppointments from "../../Pages/Dashboard/AllAppointments/AllAppointments";
import AllDoctors from "../../Pages/Dashboard/AllDoctors/AllDoctors";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
// import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ShowError from "../../Pages/Shared/ShowError/ShowError";
import RecivedPaymentList from "../../Pages/Dashboard/RecievedPaymentList/RecivedPaymentList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ShowError></ShowError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },

      {
        path: "/appoinment",
        element: <Appoinment></Appoinment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactUsMain></ContactUsMain>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ShowError></ShowError>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addDoctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allDoctors",
        element: <AllDoctors></AllDoctors>,
      },
      {
        path: "/dashboard/manageDoctors",
        element: <ManageDoctors></ManageDoctors>,
      },
      {
        path: "/dashboard/allAppointments",
        element: (
          <AdminRoute>
            <AllAppointments></AllAppointments>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookingTreatment/${params.id}`),
      },
      {
        path: "/dashboard/allRecievedPayments",
        element: (
          <AdminRoute>
            <RecivedPaymentList></RecivedPaymentList>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
