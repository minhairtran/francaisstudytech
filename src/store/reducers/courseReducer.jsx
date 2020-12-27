export const ACTION_TYPE = {
  GET_ALL_AVAILABLE_COURSES: "courses/GET_ALL_AVAILABLE_COURSES",
  GET_ALL_ENROLLED_COURSES: "courses/GET_ALL_ENROLLED_COURSES",
  ENROLL_COURSE: "courses/ENROLL_COURSE",
  // ENROLLED_COURSE: "courses/ENROLL_COURSE",
};

const initState = {
  availableCourses: [],
  enrolledCourses: [],
  isEnrolling: false,
};

const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPE.GET_ALL_AVAILABLE_COURSES:
      return {
        ...state,
        availableCourses: action.payload,
        isEnrolling: false,
      };
    case ACTION_TYPE.GET_ALL_ENROLLED_COURSES:
      return {
        ...state,
        enrolledCourses: action.payload,
        isEnrolling: false,
      };
    case ACTION_TYPE.ENROLL_COURSE:
      return {
        ...state,
        isEnrolling: true,
      };
    default:
      return state;
  }
};

export default courseReducer;
