import '../App.css';
import NoteContext from '../context/notes/noteContext';
import { useContext } from 'react';
import Notes from './Notes';

const NotesInfo = (props) => {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    let noteIndex = 0;
    return (
        <>
            <section className="home">
                <div className="big-title">
                    <div className="text">{notes[noteIndex].title}</div>
                    <div className="small-text">{notes[noteIndex].tag}</div>
                </div>
                <button className="update">Publish</button>
                <textarea id="text-notes" cols={30} rows={10} defaultValue={notes[noteIndex].description} />
            </section>
        </>
    )
}

export default NotesInfo;
