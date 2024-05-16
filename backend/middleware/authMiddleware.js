import jwt from "jsonwebtoken";

export const authenticationToken = async (req, res, next) => {
    const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split('')[1]
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
