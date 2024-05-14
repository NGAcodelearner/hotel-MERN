import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import Hotel from "./pages/Hotel";
import UpdateHotel from "./pages/UpdateHotel";
import CreateHotel from "./pages/CreateHotel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create",
        element: <CreateHotel />,
      },
      {
        path: "/:hotelId",
        element: <Hotel />,
        children: [
          {
            path: "/:hotelId/update",
            element: <UpdateHotel />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
