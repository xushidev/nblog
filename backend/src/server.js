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


// Server port to listen on
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} (http://localhost:${PORT})`);
});