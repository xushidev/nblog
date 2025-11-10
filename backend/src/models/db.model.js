import sqlite3 from "sqlite3";
import path from 'path';

// * What does every blog post need to have?
// ? id - STRING NOT NULL (trimmed hash)
// ? title - STRING NOT NULL
// ? datetime - STRING NOT NULL ('YYYY-MM-DD HH:MM:SS' format)
// ? text - STRING NOT NULL (markdown) 

// Function to create the database
export const createDB = async () => {
    // Get the path
    const __dirname = path.resolve();

    // Explicitly opens / creates the path to the database
    const db = new sqlite3.Database(path.join(__dirname, 'database', 'posts.db'));
    try {
        // Creates the table (runs the query)
        db.exec(`
        CREATE TABLE IF NOT EXISTS posts(
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            datetime TEXT NOT NULL,
            text TEXT NOT NULL
        );
        `);
    } catch (error) {
        console.log('Error in creating database: ' + error);
    }
    finally {
        db.close();
    }
}