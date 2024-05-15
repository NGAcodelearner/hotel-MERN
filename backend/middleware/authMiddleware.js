import jwt from "jsonwebtoken";

export const authorization = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "JWT_SECRET", (err) => {
      if (err) {
        // Send 403 Forbidden response and return to exit middleware execution
        return res.sendStatus(403);
      }
      // If token is valid, call next to proceed to the next middleware or route handler
      next();
    });
  } else {
    // If no token is provided, send 401 Unauthorized response and return
    return res.sendStatus(401);
  }
};
