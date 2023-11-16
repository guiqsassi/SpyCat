
const initialState = {
    userID: 2,
    logged: false,
    userIconUrl: ""
}

const userReducer =(state = initialState, action) =>{
    if(action.type === "user/login"){
        return {...state, logged: true }
    }
    if(action.type === "user/newUrl"){
        return{...state, userIconUrl: action.payload.url}
    }
    return state
}

export default userReducer