/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Note } from './Note';
import { NotesDataContext } from '../context/NotesContext';

export const NotesContainer = () => {

    const { notes } = useContext(NotesDataContext);

    return (

        notes? (
        <div className="notes-container">
            {
                notes.map((note)=>(<Note id={note.id} key={note.id} title={note.title} body={note.body} />))
            }
        </div>):null
    )
}
