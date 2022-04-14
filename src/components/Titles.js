import React from 'react';
import '../App.css';
import { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';
import NotesInfo from '../components/NotesInfo'
import Popup from '../components/Popup'
import Sidebar from '../components/Sidebar'


const Titles = (props) => {
    const context = useContext(NoteContext);
    const {open,currentNote} = context;
    return (
        <>
            <Popup open={open}/>
            <Sidebar />
            <NotesInfo title = {currentNote.title} description = {currentNote.description} tag = {currentNote.tag}/>
        </>
    )
}

export default Titles;