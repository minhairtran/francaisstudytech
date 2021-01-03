import authReducer from "./authReducer";
import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import { firestoreReducer } from "redux-firestore";
import lessonReducer from "./lessonReducer";
import { firebaseReducer } from "react-redux-firebase";
import questionReducer from "./questionReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
  lesson: lessonReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  question: questionReducer,
});

export default rootReducer;
