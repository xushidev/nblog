import sqlite3 from 'sqlite3';
import path from 'path';

// Wrapper function to execute sqlite code
// Takes in the database object, the sqlite code and the parameter (which replaces the '?' placeholder)
const execute = async (db, sql, params = []) => {
    // Executes parameter insertion if the paramenter is given / is longer than 0
    if (params && params.length > 0) {
        // Since the insertion might take some time, we return a promise
        return new Promise((resolve, reject) => {
        // The database actually running the code
        db.run(sql, params, (err) => {
            // resolves or error after finishing the job
            if (err) reject(err);
            resolve();
        });
        });
    }
    // Executes normal sqlite code without insertion
    return new Promise((resolve, reject) => {
        db.exec(sql, (err) => {
        if (err) reject(err);
        resolve();
        });
    });
};

// Insert into db, need: id, title and text
export const InsertDB = async (id, title, text) => {
    // Get the path
    const __dirname = path.resolve();

    // Explicitly opens / creates the path to the database
    const db = new sqlite3.Database(path.join(__dirname, 'database', 'posts.db'));

    try {
        
        // Inserts the id, title and text into the table
        await execute
        (
            db, 
            `INSERT INTO posts(id, title, text) VALUES (?, ?, ?)`, 
            [id, title, text]
        );
    } catch (error) {
        console.log("Error in database insertion: " + error);
    } finally {
        db.close();
    }
}

// Updates the database based on the id
export const UpdateDB = async (id, title, text) => {
    // Get the path
    const __dirname = path.resolve();

    // Explicitly opens / creates the path to the database
    const db = new sqlite3.Database(path.join(__dirname, 'database', 'posts.db'));

    try {
        
        // Updates the title and text based onto the id
        await execute
        (
            db, 
            `UPDATE posts SET title = ?, text = ? WHERE id = ?`, 
            [title, text, id]
        );
    } catch (error) {
        console.log("Error in database insertion: " + error);
    } finally {
        db.close();
    }
}

// Deletes a database row based on the id
export const DeleteDB = async (id) => {
    // Get the path
    const __dirname = path.resolve();

    // Explicitly opens / creates the path to the database
    const db = new sqlite3.Database(path.join(__dirname, 'database', 'posts.db'));

    try {
        
        // Deletes a row based onto the id
        await execute
        (
            db, 
            `DELETE FROM posts WHERE id = ?`, 
            [id]
        );
    } catch (error) {
        console.log("Error in database insertion: " + error);
    } finally {
        db.close();
    }
}
