import React from 'react'
import NoteContext from '../context/notes/noteContext';
import { useContext } from 'react';

const Notes = (props) => {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    return (
        <>
            {notes.map((note,index) => (
                <li className="nav-link true" key={index} >
                    <a href="/">
                        <i className="fa-solid fa-clipboard icon" />
                        <span className="text nav-text">{note.title}</span>
                    </a>
                    <button className="trash">
                        <i className="fa-solid fa-trash-can icon" />
                    </button>
                </li>
            ))}
        </>
    )
}


export default Notes

