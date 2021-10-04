/* eslint-disable react/prop-types */
import React from 'react';

export const Note = ({ title, body }) => {
    
    return (
        <div className="note" role="textbox">
            <h1>{title}</h1>
            <p>{body}</p>
            <button>Delete</button>
        </div>
    )
}
