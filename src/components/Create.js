import React from 'react'
import '../App.css'

export default function Create() {
    return (
        <div className="center">
            <h1>Add Note</h1>
            <form method="post">
                <div className="txt_field">
                    <input type="text" required />
                    <span />
                    <label>Title</label>
                </div>
                <div className="txt_field">
                    <input type="text" required />
                    <span />
                    <label>Tag</label>
                </div>
                <input type="submit" defaultValue="Create" />
            </form>
        </div>
    )
}
