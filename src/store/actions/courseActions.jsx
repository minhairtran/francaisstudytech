export const enrollCourse = (course) => {
  return (dispatch, getState) => {
    dispatch({
      type: "ENROLL_COURSE",
      payload: { name: course.name, status: "enrolled" },
    });
  };
};
