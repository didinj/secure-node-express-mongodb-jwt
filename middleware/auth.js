// updated middleware/auth.js
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res.status(401).json({ message: "No token, authorization denied" });

  const token = authHeader.split(" ")[1];
  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // decoded is { id: user._id, iat: ..., exp: ... }
    req.user = decoded; // ← assign the whole decoded payload
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default auth;
