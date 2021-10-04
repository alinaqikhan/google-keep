import React, { useContext, useState } from "react";
import { NotesDataContext } from "../context/NotesContext";
import { v4 as uuidv4 } from 'uuid';

export const AddNote = () => {

    const [inputText, setInputText] = useState({title:'', body:''});
    const { addToNotes } = useContext(NotesDataContext);

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
            <button className="add-button" onClick={()=>{
              addToNotes({...inputText, id: uuidv4()});
              setInputText({title:'',body:''})}}>Close</button>
            </>
            ):null
        }
        
      </div>
    </div>
  );
};
