import express from 'express';
import authRoutes from './routes/auth.route.js';
import path from 'path';

const app = express();

// Depends on the port provided by the docker
const PORT = process.env.PORT || 3000;

// Gets the current directory name
const __dirname = path.resolve();

app.use("/api/auth", authRoutes);

// Get the static html, css and js files from the frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));
// And sends it to the user
app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Todo: add: /models for sqlite, /lib for functions by sqlite (insert into, etc...)
// Todo: add: /middleware for checking jwt token in cookies
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

// Server port to listen on
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} (http://localhost:${PORT})`);
});
