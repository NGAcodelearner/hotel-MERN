import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

const Homepage = () => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await axios.get("http://localhost:5000/");
        setHotels(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHotel();
  }, []);
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {hotels.map((hotel) => (
          <div className="flex flex-col">
            <img className="rounded-xl" src={hotel.imageURL} alt={hotel.name} />
            <h2 className="font-bold text-lg mt-4">{hotel.name}</h2>
            <p className="text-gray-500 text-sm">{hotel.description}</p>
            <p className="mt-2 text-gray-700 font-medium">{hotel.price} vnd</p>
            <div className="flex gap-2 mt-2">
              <MdOutlineEdit size={20} onClick={() => navigate("/update")} />
              <MdDeleteOutline size={20} />
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Homepage;
