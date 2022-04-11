// import { useState } from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "624eed0a2f5910f522aa260f",
            "user": "624ee35afa90c7166b55a351",
            "title": "Title-1",
            "description": "this is my description",
            "tag": "Personal",
            "date": "1649339658964",
            "__v": 0
        },
        {
            "_id": "624eed3f3dc357a881528ef1",
            "user": "624ee35afa90c7166b55a351",
            "title": "title-2",
            "description": "this is my description",
            "tag": "Public",
            "date": "1649339711632",
            "__v": 0
        }
    ]
    const [notes,setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;