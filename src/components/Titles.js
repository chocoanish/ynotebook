import React, { useState } from 'react';
import '../App.css';
import { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';
import NotesInfo from '../components/NotesInfo'
import Popup from '../components/Popup'
import Sidebar from '../components/Sidebar'
import Default from '../components/Default'


const Titles = (props) => {
    const context = useContext(NoteContext);
    const {open,currentNote,hide} = context;
    return (
        <>
            <Popup open={open}/>
            <Sidebar />
            {hide?<NotesInfo title = {currentNote.title} description = {currentNote.description} tag = {currentNote.tag}/>:<Default />}
        </>
    )
}

export default Titles;