import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Homepage = () => {
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
      <div className="p-4 flex gap-8 bg-yellow text-white font-semibold shadow-sm justify-end">
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/create">Create</NavLink>
      </div>
      {/* hotel lists */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-6">
        {hotels.map((hotel) => (
          <div className="flex flex-col">
            <img className="rounded-xl" src={hotel.imageURL} alt={hotel.name} />
            <h2 className="font-bold text-lg mt-4">{hotel.name}</h2>
            <p className="text-gray-500 text-sm">{hotel.description}</p>
            <p className="mt-2 text-gray-700 font-medium">{hotel.price} vnd</p>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Homepage;
