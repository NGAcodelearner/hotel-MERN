import { UserModel } from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExist = await UserModel.findOne({ username: username });
    if (userExist) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = new UserModel({ username, password: hashPassword });
      await newUser.save();
      res.json({ message: "User registered successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username: username });
  if (user) {
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.json({ message: "Password is incorrect!" });
    }
    //generate token
    const token = jwt.sign({ id: user._id }, "JWT_SECRET", {
      expiresIn: "30d",
    });
    return res
      .cookie("access-token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ message: "Logged in successfully" });
  } else {
    return res.json({ message: "User not register" });
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("access-token");
  res.status(200).json({ message: "User logged out" });
};
export { registerUser, loginUser, logoutUser };
