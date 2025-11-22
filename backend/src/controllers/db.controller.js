import { DeleteDB, GetAllDB, GetDB, InsertDB, UpdateDB } from "../libs/db.util.js";

// Routes to be implemented (note that this lacks the get route)
// post, '/post'
export const postBlog = async (req, res) => {
    const { id, title, text } = req.body;

    if (!id || !title || !text){
        return res.status(400).json({ message: "Insert all fields" });
    }

    try {
        InsertDB(id, title, text);
        return res.status(201).json({ message: "Post created successfully" });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error in insert" });
    }
}

// put, '/edit/:id'
export const editBlog = async (req, res) => {
    const { title, text } = req.body;
    const { id } = req.params;

    if (!title || !text){
        return res.status(400).json({ message: "Insert all fields" });
    }

    try {
        UpdateDB(id, title, text);
        return res.status(200).json({ message: "Post edited successfully" });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error in edit" });
    }
}

// delete, '/delete/:id'
export const deleteBlog = async (req, res) => {
    const { title, text } = req.body;
    const { id } = req.params;

    if (!title || !text){
        return res.status(400).json({ message: "Insert all fields" });
    }

    try {
        DeleteDB(id, title, text);
        return res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error in delete" });
    }
}

// get, '/get'
export const getAllBlog = async (_, res) => {
    try {
        let posts = await GetAllDB();
        return res.status(200).json(posts);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error in fetching" });
    }
}

// get, '/get/:id'
export const getBlog = async (req, res) => {
    const { id } = req.params;
    try {
        let posts = await GetDB(id);
        return res.status(200).json(posts);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error in fetching" });
    }
}