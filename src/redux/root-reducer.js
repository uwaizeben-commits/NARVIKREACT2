import handleCart from "../cart.reducer";
import userReducer from "../user.reducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    handleCart,
    user: userReducer,
});
export default rootReducers;