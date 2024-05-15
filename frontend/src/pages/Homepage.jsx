
import { NavLink, Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      {/* navbar */}
      <div className="p-4 text-dark-blue font-semibold border-b shadow-sm">
        <NavLink to="/register" className=" mr-4">
          Register
        </NavLink>
        <NavLink to="/login" className="">
          Login
        </NavLink>
      </div>
      {/* hotel lists */}
      
      <Outlet />
    </div>
  );
};

export default Homepage;
