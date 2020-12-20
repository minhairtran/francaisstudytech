export const enrollCourse = (course) => {
  return (dispatch, getState, { getFireBase, getFireStore }) => {
    dispatch({
      type: "ENROLL_COURSE",
      payload: { name: course.name, status: "enrolled" },
    });
  };
};
