import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // 🔥 Extract token after "Bearer "
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ error: "No token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export default authMiddleware;
