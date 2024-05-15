import { useState } from "react";
import Form from "../components/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/register", {
        username,
        password,
      });
      navigate("/login");
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
      label="Register"
      onSubmit={onSubmit}
    />
  );
};

export default Register;
