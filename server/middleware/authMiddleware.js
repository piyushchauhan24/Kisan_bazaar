import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  try {
    // Authorization header lo
    const authHeader = req.headers.authorization;

    // Check karo header hai ya nahi
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Not authorized, token missing",
      });
    }

    // Token nikaalo
    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // User ki information request me store karo
    req.user = decoded;

    // Next middleware/controller
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export default protect;