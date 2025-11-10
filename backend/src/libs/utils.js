import jwt from 'jsonwebtoken';

import dotenv from "dotenv";
dotenv.config();

export const generateToken = (UserId, res) => {
    // Creates the token with 7 days expiry
    const token = jwt.sign({UserId}, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        httpOnly: true, 
        sameSite: "strict",
        secure: process.env.HTTPS || false // Set to true if using https
    });
}

