export const ACTION_TYPE = {
  GET_ALL_AVAILABLE_COURSES: "courses/GET_ALL_AVAILABLE_COURSES",
  GET_ALL_ENROLLED_COURSES: "courses/GET_ALL_ENROLLED_COURSES",
  ENROLL_COURSE: "courses/ENROLL_COURSE",
  GET_ALL_ENROLLED_COURSES_NAME: "courses/GET_ALL_ENROLLED_COURSES_NAME",
};

const initState = {
  availableCourses: [],
  enrolledCourses: [],
  isEnrolling: null,
  enrolledCoursesName: [],
};

const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPE.GET_ALL_AVAILABLE_COURSES:
      return {
        ...state,
        availableCourses: action.payload,
      };
    case ACTION_TYPE.GET_ALL_ENROLLED_COURSES:
      return {
        ...state,
        enrolledCourses: action.payload,
      };
    case ACTION_TYPE.ENROLL_COURSE:
      return {
        ...state,
        isEnrolling: true,
      };
    case ACTION_TYPE.ENROLL_COURSE_SUCCESS:
      return {
        ...state,
        isEnrolling: false,
      };
    case ACTION_TYPE.GET_ALL_ENROLLED_COURSES_NAME:
      return {
        ...state,
        enrolledCoursesName: action.payload,
      };
    default:
      return state;
  }
};

export default courseReducer;
