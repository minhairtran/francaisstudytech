import { ACTION_TYPE } from "../reducers/courseReducer";

export const getAllAvailableCourses = (userId) => {
  return (dispatch, getState, { firebase }) => {
    const firestore = firebase.firestore();
    let enrolledCoursesName = ["none"];
    firestore
      .collection("usersCourseProgress")
      .doc(userId)
      .get()
      .then((userCourseProgress) => {
        userCourseProgress
          .data()
          .courses.forEach((course) =>
            enrolledCoursesName.push(course.courseName)
          );
      })
      .then(() =>
        firestore
          .collection("courses")
          .where("name", "not-in", enrolledCoursesName)
          .get()
          .then((courses) => {
            let availableCourses = [];
            courses.docs.forEach((course) => {
              availableCourses.push(course.data());
            });
            dispatch({
              type: ACTION_TYPE.GET_ALL_AVAILABLE_COURSES,
              payload: { availableCourses },
            });
          })
          .catch((error) => console.log(error))
      );
  };
};

export const enrollCourse = (userId, course) => {
  return (dispatch, getstate, { firebase }) => {
    const firestore = firebase.firestore();
    firestore
      .collection("usersCourseProgress")
      .doc(userId)
      .update(
        {
          courses: firebase.firestore.FieldValue.arrayUnion({
            courseName: course.name,
            enrollAt: new Date(),
          }),
        },
        { merge: true }
      )
      .then(() => {
        console.log(course);
        dispatch({
          type: ACTION_TYPE.ENROLL_COURSE,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const getAllEnrolledCourses = (userId) => {
  return (dispatch, getstate, { firebase }) => {
    const firestore = firebase.firestore();
    let enrolledCoursesName = ["none"];
    firestore
      .collection("usersCourseProgress")
      .doc(userId)
      .get()
      .then((userCourseProgress) => {
        userCourseProgress
          .data()
          .courses.forEach((course) =>
            enrolledCoursesName.push(course.courseName)
          );
      })
      .then(() => {
        console.log(enrolledCoursesName);
        firestore
          .collection("courses")
          .where("name", "in", enrolledCoursesName)
          .get()
          .then((courses) => {
            let enrolledCourses = [];
            courses.docs.forEach((course) => {
              enrolledCourses.push(course.data());
            });
            dispatch({
              type: ACTION_TYPE.GET_ALL_ENROLLED_COURSES,
              payload: { enrolledCourses },
            });
          })
          .catch((error) => console.log(error));
      });
  };
};
