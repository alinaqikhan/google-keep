/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { NotesDataContext } from '../context/NotesContext';

export const Note = ({ id, title, body }) => {

    const { removeFromNotes } = useContext(NotesDataContext);
    
    return (
        <div className="note" role="textbox">
            <h1>{title}</h1>
            <p>{body}</p>
            <button onClick={()=>removeFromNotes(id)}>Delete</button>
        </div>
    )
}
