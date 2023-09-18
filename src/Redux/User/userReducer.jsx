
const initialState = {
    logged: false
}

const userReducer =(state = initialState, action) =>{
    if(action.type === "user/login"){
        return {...state, logged: true }
    }
    return state
}

export default userReducer