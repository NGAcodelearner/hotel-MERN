import React from "react";
import { useParams } from "react-router-dom";

const Hotel = () => {
  const params = useParams();
  return <div>{params.hotelId}</div>;
};

export default Hotel;
