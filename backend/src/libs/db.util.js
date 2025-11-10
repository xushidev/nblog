import sqlite3 from 'sqlite3';
import path from 'path';

// Insert into db, need: id, title and text
export const InsertDB = (id, title, text) => {
    // Get the path
    const __dirname = path.resolve();

    // Explicitly opens / creates the path to the database
    const db = new sqlite3.Database(path.join(__dirname, 'database', 'posts.db'));

    try {
        
        

    } catch (error) {
        console.log("Error in database insertion: " + error);
    } finally {
        db.close();
    }
}