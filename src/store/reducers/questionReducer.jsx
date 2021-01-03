export const ACTION_TYPE = {
  GET_ALL_QUESTIONS_OF_LESSON: "questions/GET_ALL_QUESTIONS_OF_LESSON",
};

const initState = {
  questionsOfLesson: [],
};

const questionReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPE.GET_ALL_QUESTIONS_OF_LESSON:
      return {
        ...state,
        questionsOfLesson: action.payload,
      };
    default:
      return state;
  }
};

export default questionReducer;
