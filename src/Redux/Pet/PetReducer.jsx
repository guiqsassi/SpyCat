
const initialState = {
    url:"a",
    pet: {}
}

const petReducer =(state = initialState, action) =>{
    if(action.type === "url"){
        return {
            ...state,
             url: action.payload.url}
        
    }
    if(action.type === "petPage"){
        return{
            ...state,
            pet: action.payload.pet
        }
    }
    return state
}

export default petReducer