import sqlite3 from "sqlite3";
import path from 'path';
import { mkdir } from "fs";

// * What does every blog post need to have?
// ? id - STRING NOT NULL (trimmed hash)
// ? title - STRING NOT NULL
// ? datetime - STRING NOT NULL ('YYYY-MM-DD HH:MM:SS' format)
// ? text - STRING NOT NULL (markdown) 

// Function to create the database
export const createDB = async () => {
    // Get the path
    const __dirname = path.resolve();

    // Creates the directory where the database will exist in
    mkdir(path.join(__dirname, 'database'), { recursive: true }, (err) => {
        if (err) {
            return console.error('Error creating database directory: ' + err);
        }
    });

    // Explicitly opens / creates the path to the database
    const db = new sqlite3.Database(path.join(__dirname, 'database', 'posts.db'));
    try {
        // Creates the table (runs the query)
        db.exec(`
        CREATE TABLE IF NOT EXISTS posts(
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            text TEXT NOT NULL
        );
        `);
    } catch (error) {
        // Logs the error in case there is one
        console.log('Error in creating database: ' + error);
    }
    finally {
        // Ensures the database connection is closed
        db.close();
    }
};