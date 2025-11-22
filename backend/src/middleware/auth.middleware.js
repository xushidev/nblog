import jwt from "jsonwebtoken";
import md5 from "md5";

import dotenv from "dotenv";
dotenv.config();

export const protectRoute = async (req, res, next) => {
    try {
        // Parses the jwt cookie in client's browser
        const token = req.cookies.jwt;

        // If token not found
        if (!token){
            return res.status(401).json({ message: "Unauthorized - No token provided"});
        }

        // If token is invalid (different JWT_SECRET)
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded){
            return res.status(401).json({ message: "Unauthorized - Invalid token"});
        }

        // Verifies if the user exists (which in turns verifies if the user is admin)
        if (decoded.UserId != md5(process.env.USERNAME)){
            return res.status(401).json({ message: "User not found"});
        }

        // If all goes well, the next function is used
        next();
    } catch (error) {
        return res.status(500).json({ message: "Internal server error"});
    }
}