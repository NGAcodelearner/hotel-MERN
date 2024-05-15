import React, { useState } from "react";
import Form from "../components/Form";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });
      setCookies("access_token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      label="Login"
      onSubmit={onSubmit}
    />
  );
};

export default Login;
