import React from 'react';
import '../App.css';
import NoteContext from '../context/notes/noteContext';
import { useContext } from 'react';

export default function NotesItem(props) {
    const context = useContext(NoteContext);
    const {deleteNote, showNote} = context;
    return (
        <li className="nav-link true" onClick={()=>showNote(props.id)}>
                    <span className='created'>
                        <i className="fa-solid fa-clipboard icon" />
                        <span className="text nav-text">{props.title}</span>
                    </span>
                    <button className="trash">
                        <i className="fa-solid fa-trash-can icon" onClick={()=>deleteNote(props.id)} />
                    </button>
                </li>
    )
}
