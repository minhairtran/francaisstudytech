import authReducer from "./authReducer";
import levelReducer from "./levelReducer";
import { combineReducers } from "redux";
import courseReducer from "./courseReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  level: levelReducer,
  course: courseReducer
});

export default rootReducer;
