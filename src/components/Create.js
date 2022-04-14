import React from 'react';
import '../App.css';
import { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';



const Create = (props) => {
    const context = useContext(NoteContext);
    const {add} = context;
    return (
        <>
            <li className="nav-link true" onClick={add}>
                <span className='created'>
                    <i className="fa-solid fa-plus icon" />
                    <span className="text nav-text">Create</span>
                </span>
            </li>
        </>
    )
}

export default Create;