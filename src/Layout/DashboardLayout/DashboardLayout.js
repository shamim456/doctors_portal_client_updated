import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useAdminHook from "../../Hooks/useAdminHook";
import Loading from "../../Pages/Shared/Loading/Loading";
import NavBar from "../../Pages/Shared/NavBar/NavBar";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdminHook(user?.email);

  if (isAdminLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile drawer-container ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side drawer-css h-screen">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Appointment</Link>
              <Link to="/dashboard/allDoctors">All Doctors</Link>
            </li>
            <li>
              {isAdmin && <Link to="/dashboard/allUsers">All Users</Link>}
              {isAdmin && <Link to="/dashboard/addDoctor">Add Doctor</Link>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
