// import { useState } from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
    const [noteIndex, setIndex] = useState(0);
    // Getting all notes
    const getNote = async () => {
        //Using Api
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1NjU4N2VkYjNiNTdkMDRkYzY5N2JkIn0sImlhdCI6MTY0OTgyNTkyNn0.P2pXQc4DxslOMFJ42lZ_XY79ubUmm3nK1mrxBcd7M1g'
            },
        });
        const json = await response.json()
        setNotes(json)
    }
    // Adding a note
    const addNote = async (title, description, tag) => {
        //Using Api
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0ZWUzNWFmYTkwYzcxNjZiNTVhMzUxIn0sImlhdCI6MTY0OTMzNzE4OX0.3sCKwNc1fm2xp9Ux01w6Q3OzAm2gwKy_VpHAs-9RmGY'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();
        let note = {
            "_id": `624eed3f3dc357a881520ef2`,
            "user": "624ee35afa90c7166b55a351",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "1649339711632",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }
    //Deleting a note
    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => { return note._id !== id })
        if (noteIndex === 0) {
            setIndex(noteIndex + 1);
        }
        else {
            setIndex(noteIndex - 1);
        }
        setNotes(newNotes);
        console.log(newNotes);
        console.log(noteIndex);
    }
    const [currentNote, setcurNote] = useState([])
    // Showing Notes
    const showNote = (id) => {
        const x = notes.findIndex(function (item, i) {
            return item._id === id
        });
        setIndex(x);
        setcurNote(notes[x]);
    }
    // Editing a note
    const editNote = async (id, title, description, tag) => {
        //Using Api
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0ZWUzNWFmYTkwYzcxNjZiNTVhMzUxIn0sImlhdCI6MTY0OTMzNzE4OX0.3sCKwNc1fm2xp9Ux01w6Q3OzAm2gwKy_VpHAs-9RmGY'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        // Logic to edit a note
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }
    //Fresh
    const [open, setopen] = useState(true)
    const add = (e) => {
        setopen(!open);
        e.preventDefault();
    }

    return (
        <NoteContext.Provider value={{ notes, noteIndex, setNotes, deleteNote, showNote, addNote, editNote, getNote, open, setopen, add,currentNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;