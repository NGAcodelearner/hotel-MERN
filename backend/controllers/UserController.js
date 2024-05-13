import { UserModel } from "../models/UserModel.js";

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExist = await UserModel.findOne({ username: username });
    if (userExist) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const newUser = await UserModel.create({
        username: username,
        password: password,
      });
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { registerUser };
