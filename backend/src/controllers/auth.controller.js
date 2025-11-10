import { generateToken } from "../libs/utils.js";
import md5 from "md5";

import dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => {
    // Get username and password from request body
    const { username, password } = req.body;

    // Get credentials from environment variables
    const adminUsername = process.env.USERNAME;
    const adminPassword = process.env.PASSWORD;

    try {
        // Compare username
        if (username !== adminUsername) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // Compare password
        if (password !== adminPassword) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // Generate JWT token from username and secret, and send it as a cookie
        // Using md5 hash of the username as the ID for the token
        generateToken(md5(adminUsername), res);

        // Send success message
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        // Log the error for debugging
        console.error("Login error: ", error);

        // Send internal server error status
        res.status(500).json({ message: "Internal server error" });
    }
};

export const logout = async (_, res) => {
    // Sets the cookie's max age to 0 to delete it (basically deletes it instantly)
    res.cookie("jwt", "", {maxAge: 0});
    return res.status(200).json({ message: "Logout successful" });
};