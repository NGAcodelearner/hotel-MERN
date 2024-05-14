import jwt from "jsonwebtoken";

export const authorization = async (req, res, next) => {
  const token = req.cookies["access_token"];
  if (!token) {
    return res.status(401).json({ error: "Authorization token is required" });
  }
  try {
    const data = jwt.verify(token, "JWT_SECRET");
    // Attaching the user ID to the request object
    req.user = data.id;
    next();
  } catch (errors) {
    console.log(errors);
    res.status(401).json({ message: "Request is not authorized" });
  }
};
