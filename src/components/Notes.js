import React, { useEffect } from 'react'
import NoteContext from '../context/notes/noteContext';
import { useContext } from 'react';
import NotesItem from './NotesItem';

const Notes = (props) => {
    const context = useContext(NoteContext);
    const { notes, getNote} = context;
    useEffect(()=>{getNote()},[]);
    return (
        <>
            {notes.map((note, index) => {
                return <NotesItem key={note._id} id={note._id} title={note.title} description={note.description} tag={note.tag} />
            })}
        </>
    )
}


export default Notes

