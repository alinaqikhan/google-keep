export const contextReducer = (state, action) => {
    let notesToStore;
    switch (action.type) {
        case "ADD_TO_NOTES":
            notesToStore = [...state, action.payload]
            localStorage.setItem('notes', JSON.stringify(notesToStore) );
            return notesToStore;
        case "DELETE_FROM_NOTES":
            
            return;
    
        default:
            return;
    }
}