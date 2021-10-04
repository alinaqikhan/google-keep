export const contextReducer = (state, action) => {
    let notesToStore;
    switch (action.type) {

        case "ADD_TO_NOTES":
            notesToStore = [...state, action.payload]
            localStorage.setItem('notes', JSON.stringify(notesToStore) );
            return notesToStore;
            
        case "REMOVE_FROM_NOTES":
            notesToStore = state.filter((note)=>note.id!==action.payload);
            localStorage.setItem('notes', JSON.stringify(notesToStore));
            return notesToStore;
    
        default:
            return state;
    }
}