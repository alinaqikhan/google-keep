import React from 'react';
import '../stylesheets/Main.scss';
import { AddNote } from './AddNote';
import { NotesContainer } from './NotesContainer';

export const Main = () => {
    return (
        <div className="main-container">
            <AddNote />
            <NotesContainer />
        </div>
    )
}
