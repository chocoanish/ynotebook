import '../App.css';
// import NoteContext from '../context/notes/noteContext';
// import { useContext, useState } from 'react';

const NotesInfo = (props) => {
    // const context = useContext(NoteContext);
    // const { notes,noteIndex,getNote} = context;
    // const [note,setNote] = useState({title: notes[noteIndex].title, description:  notes[noteIndex].description, tag: notes[noteIndex].tag})
    // const onChange=(e)=>{
    //     setNote({...note, [e.target.name]: e.target.value})
    // }
    return (
        <>
            <section className="home">
                <div className="big-title">
                    <div className="text">{props.title}</div>
                    <div className="small-text">{props.tag}</div>
                </div>
                <button className="update">Publish</button>
                <textarea id="text-notes" cols={30} rows={10} value={props.description}/>
            </section>
        </>
    )
}

export default NotesInfo;
