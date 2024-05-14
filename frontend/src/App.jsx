import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Hotel from "./pages/Hotel";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateHotel from "./pages/UpdateHotel";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id/update" element={<UpdateHotel />} />
        <Route path="/:id" element={<Hotel />} />
      </Routes>
    </div>
  );
};

export default App;
