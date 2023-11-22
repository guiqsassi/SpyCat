
const initialState = {
    userID: 2,
    logged: false,
    userIconUrl: "https://www.tvpop.com.br/wp-content/uploads/2023/08/celso-russomanno-1024x576.png",
    token: ""
}

const userReducer =(state = initialState, action) =>{
    if(action.type === "user/login"){
        return {...state, 
            logged: true,
            userID: action.payload.id,
            userIconUrl: action.payload.icon,
            token: action.payload.token
        }
    }
    if(action.type === "user/newUrl"){
        return{...state, userIconUrl: action.payload.url}
    }
    return state
}

export default userReducer