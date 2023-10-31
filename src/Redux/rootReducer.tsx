import {combineReducers} from "redux"
import userReducer from "./User/userReducer"
import petReducer from "./Pet/PetReducer"

const rootReducer = combineReducers({userReducer, petReducer})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>

