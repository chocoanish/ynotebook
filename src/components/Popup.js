import React, { useState } from 'react';
import '../App.css';
import { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';



const Popup = (props) => {
    const context = useContext(NoteContext);
    const { addNote, open, add,setOpen} = context;
    const [note, setNote] = useState({ title: "", description: "You are free to write now!!!", tag: "" })
    const handleCreate = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        setOpen(!open);
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className={open ? "popup-box" : "popup-box show"}>
                <div className="popup">
                    <div className="header">
                        <h1>Add Note</h1>
                        <i className="fa-solid fa-xmark " onClick={add}></i>
                        <hr />
                    </div>
                    <form method="post">
                        <div className="txt_field">
                            <input type="text" id='title' name='title' onChange={onChange} required />
                            <span />
                            <label>Title</label>
                        </div>
                        <div className="txt_field">
                            <input type="text" id='tag' name='tag' onChange={onChange} required />
                            <span />
                            <label>Tag</label>
                        </div>
                        <input type="submit" value="Create" onClick={handleCreate} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Popup;