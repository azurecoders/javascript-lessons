import { errorHandler } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";

export const verifyUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  // authorization: Bearer token
  // ["Bearer", "token"] -> index 1 = token

  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET,
    (err, decoded_data) => {
      if (err) {
        return next(errorHandler(403, "Forbidden"));
      }

      return decoded_data;
    },
  );

  req.user = decoded._id;
  next();
};
