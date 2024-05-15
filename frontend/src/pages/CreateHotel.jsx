import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateHotel = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageURL: "",
    price: 0,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/create", formData);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-md p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-md p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="imageURL"
            className="block text-gray-700 font-bold mb-2"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-md p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-md p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="bg-yellow hover:bg-dark-yellow text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Create Hotel
        </button>
      </form>
    </div>
  );
};

export default CreateHotel;
