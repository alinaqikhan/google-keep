/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from "react";
import { contextReducer } from "./contextReducer";

const initialState = [];

export const NotesDataContext = createContext(initialState);

export const Provider = ({ children }) => {

  const [notes, dispatch] = useReducer(contextReducer, initialState);

  const addToNotes = (notes) => {
    dispatch({ type: "ADD_TO_NOTES", payload: notes });
  };

  const removeFromNotes = (id) => {
    dispatch({ type: "REMOVE_FROM_NOTES", payload: id });
  };

  return (
    <NotesDataContext.Provider value={{ notes, addToNotes, removeFromNotes }}>
      {children}
    </NotesDataContext.Provider>
  );
};
