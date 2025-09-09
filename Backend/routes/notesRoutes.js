import express from 'express';
import { getAllNotes } from '../controllers/notesController.js';

const router = express.Router();


router.get("/", getAllNotes);

router.post("/", (req, res) => {
    // add the notes
    res.status(201).json("note added successfully");
});

router.put("/:id", (req, res) => {
    // update the notes
    res.status(200).json("note updated successfully");
});

router.delete("/:id", (req, res) => {
    // delete the notes
    res.status(200).json("note deleted successfully");
});

export default router;