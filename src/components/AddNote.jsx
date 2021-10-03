import React, { useState } from "react";

export const AddNote = () => {

    const [inputText, setInputText] = useState({title:'', body:''});

  return (
    <div className="add-note-container">
      <div className="add-note-box">
        <input type="text" onChange={(e)=>setInputText((prevData)=> {
            return {...prevData, title:e.target.value}
        })} value={inputText.title} placeholder="Take a note..." />
        {
            inputText.title.length>0?
             (
             <>
             <textarea name="" onChange={(e)=>setInputText((prevData)=> {
                return {...prevData, body:e.target.value}
            })} id="" cols="57" value={inputText.body} placeholder="Take a note..." rows="3"></textarea>
            <button className="add-button">Close</button>
            </>
            ):null
        }
        
      </div>
    </div>
  );
};
