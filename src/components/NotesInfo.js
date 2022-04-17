import '../App.css';
import NoteContext from '../context/notes/noteContext';
import { useContext, useState } from 'react';

const NotesInfo = (props) => {
    const context = useContext(NoteContext);
    const {editNote} = context;
    const [note,setNote] = useState({etitle: props.title, edescription:  props.description, etag: props.tag})
    const [node,setnode] = useState(false)
    const handleUpdate = (e) => {
        e.preventDefault();
        editNote(props.id, note.etitle, note.edescription, note.etag)
        setnode(false)
    }
    const onChange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
        setnode(true)
    }
    return (
        <>
            <section className="home">
                <div className="big-title">
                    <div className="text">{props.title}</div>
                    <div className="small-text">{props.tag}</div>
                </div>
                <button className={node?"update active":"update"} onClick={handleUpdate}>Publish</button>
                <textarea id="text-notes" name='edescription' cols={30} rows={10} value={note.edescription} onChange={onChange}/>
            </section>
        </>
    )
}

export default NotesInfo;
