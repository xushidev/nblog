import express from 'express';
import authRoutes from './routes/auth.route.js';
import path from 'path';
import databaseRoutes from './routes/db.route.js';
import cookieParser from 'cookie-parser';
import cors from "cors";
import { createDB } from './models/db.model.js';

// Using dotenv temporarily
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Depends on the port provided by the docker
const PORT = process.env.PORT || 3000;

// Gets the current directory name
const __dirname = path.resolve();

// Parses JSON requests payloads
app.use(express.json());

// Parses cookies
app.use(cookieParser());

// Allows the frontend to send requests to the backend
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/db", databaseRoutes);

// Get the static html, css and js files from the frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));
// And sends it to the user
app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Creates the database
createDB();

//// add: /models for sqlite ////
// Todo: add: /lib functions for sqlite (inserts, delete, etc...)
//// add: /middleware for checking jwt token in cookies ////
// Todo: add: /controllers for handling requests (get posts, add post, delete post, etc...)
// Todo: add: /routes/db.route.js for handling sqlite related routes (need middleware to check for token)

// ! Admin panel (and it's functions) can only be accessed
// ! If the user is logged in (has a valid jwt token cookie)
// ! Else he will be redirected by the frontend automatically to the login page
// ! Or another page.

// ? Current ENV variables used:
// ? PORT - port to run the server on
// ? USERNAME - admin username for login
// ? PASSWORD - admin password for login
// ? JWT_SECRET - secret key for signing JWT tokens
// ? HTTPS - whether to set the secure (http/https) flag on cookies (false/true)
// ? CLIENT_URL - URL of the client

// Server port to listen on
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} (http://localhost:${PORT})`);
});
