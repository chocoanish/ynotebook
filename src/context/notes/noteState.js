// Imports
import { useState } from "react";
import NoteContext from "./noteContext";




const NoteState = (props) => {
    // DECLERATIONS
    const host = "http://localhost:5000";
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
    const [noteIndex, setIndex] = useState(0);
    const [currentNote, setcurNote] = useState([])
    const [hide,setHide] = useState(false);
    const {pub,setPub} = useState(false);

    // FUNCTIONS
    // 1:Getting all notes
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

    // 2:Adding a note
    const addNote = async (title, description, tag) => {
        //Using Api
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1NjU4N2VkYjNiNTdkMDRkYzY5N2JkIn0sImlhdCI6MTY0OTgyNTkyNn0.P2pXQc4DxslOMFJ42lZ_XY79ubUmm3nK1mrxBcd7M1g'
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
        getNote()
        // console.log(notes)
    }

    // 3:Deleting a note
    const deleteNote = async (id) => {
        // Using API
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1NjU4N2VkYjNiNTdkMDRkYzY5N2JkIn0sImlhdCI6MTY0OTgyNTkyNn0.P2pXQc4DxslOMFJ42lZ_XY79ubUmm3nK1mrxBcd7M1g'
            },
        });
        const json = response.json();

        const newNotes = notes.filter((note) => { return note._id !== id })
        if (noteIndex === 0) {
            setIndex(noteIndex + 1);
        }
        else {
            setIndex(noteIndex - 1);
        }
        setNotes(newNotes);
        setcurNote([{
            title: "Create a new Note",
            description: "You are free to write now!",
            tag: "",
        }])
        setHide(false);
    }

    // 4:Editing a note
    const editNote = async (id, title, description, tag) => {
        //Using Api
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1NjU4N2VkYjNiNTdkMDRkYzY5N2JkIn0sImlhdCI6MTY0OTgyNTkyNn0.P2pXQc4DxslOMFJ42lZ_XY79ubUmm3nK1mrxBcd7M1g'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        // Logic to edit a note
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes)
    }

    // 5:Showing Notes
    const showNote = (id) => {
        const x = notes.findIndex(function (item, i) {
            return item._id === id
        });
        setIndex(x);
        setcurNote(notes[x]);
        setHide(true)
    }

    // Toggling Functions
    const [open, setOpen] = useState(true)
    const add = (e) => {
        setOpen(!open);
        e.preventDefault();
    }


    return (
        <NoteContext.Provider value={{ notes, noteIndex, setNotes, deleteNote, showNote, addNote, editNote, getNote, open, setOpen, add, currentNote, hide, pub, setPub}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;