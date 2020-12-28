export const ACTION_TYPE = {
  GET_UNDONE_LESSONS: "lesson/GET_UNDONE_LESSONS",
  GET_CURRENT_LESSON: "lesson/GET_CURRENT_LESSON",
  GET_PASSED_LESSONS: "lesson/GET_PASSED_LESSONS",
  IS_ENTERING_CLASS: "lesson/IS_ENTERING_CLASS",
};

const initState = {
  currentLesson: null,
  undoneLessons: [],
  passedLessons: [],
  isEnteringClass: false,
};

const lessonReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPE.GET_UNDONE_LESSONS:
      return {
        ...state,
        undoneLessons: action.payload,
        isEnteringClass: false,
      };
    case ACTION_TYPE.GET_PASSED_LESSONS:
      return {
        ...state,
        passedLessons: action.payload,
        isEnteringClass: false,
      };
    case ACTION_TYPE.GET_CURRENT_LESSON:
      return {
        ...state,
        currentLesson: action.payload,
        isEnteringClass: false,
      };
    case ACTION_TYPE.IS_ENTERING_CLASS:
      return {
        ...state,
        isEnteringClass: true,
      };
    default:
      return state;
  }
};

export default lessonReducer;
