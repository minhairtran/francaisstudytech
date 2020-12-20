import authReducer from "./authReducer";
import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import { firestoreReducer } from 'redux-firestore'
import lessonReducer from './lessonReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
  lesson: lessonReducer,
  firestore: firestoreReducer
});

export default rootReducer;
