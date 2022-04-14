const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Notes = require('../models/Notes')

// Route 1: Get all notes using: GET "api/auth/getallnotes".  
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id});
        res.json(notes);
        console.log(req)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error occured")
    }
})

// Route 2: Adding notes using: POST "api/auth/addnotes".  
router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid title of minimum 3 characters').isLength({ min: 3 }),
    body('description', 'Enter aleast 5 character').isLength({ min: 5 })
],
    async (req, res) => {
        try {
            const { title, description, tag } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Notes({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save();
            res.json(savedNote)
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal Server error occured")
        }
    })

// Route 3: Updating an existing Note using: PUT "api/auth/updatenote". 
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // Create a newNote Object
        const newNote = {};
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        // Find the note to be updated and update it.
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send('Not found') }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send('Not Allowed')
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error occured")
    }
})

// Route 4: Deleting a Note using: DELETE "api/auth/deletenote". 
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be deleted and delete it.
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send('Not found') }
        // Allow deletion if only user owns it
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send('Not Allowed')
        }
        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error occured")
    }
})

module.exports = router;
