import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div className="p-4 text-white bg-blue-600">
        <NavLink to="/register" className="text-white mr-4">
          Register
        </NavLink>
        <NavLink to="/login" className="text-white">
          Login
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Homepage;
