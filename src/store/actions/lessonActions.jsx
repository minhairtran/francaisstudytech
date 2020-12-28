import { ACTION_TYPE } from "../reducers/lessonReducer";

export const getUndoneLessons = (userId, courseName) => {
  return (dispatch, getState, { firebase }) => {
    const firestore = firebase.firestore();
    let passedAndCurrentLessonsName = ["none"];
    firestore
      .collection("usersLessonProgress")
      .doc(userId + courseName)
      .get()
      .then((userLessonProgress) => {
        userLessonProgress.data().lessons.forEach((lesson) => {
          passedAndCurrentLessonsName.push(lesson.lessonName);
        });
      })
      .then(() =>
        firestore
          .collection("lessons")
          .where("lessonName", "not-in", passedAndCurrentLessonsName)
          .where("courseName", "==", courseName)
          .get()
          .then((lessons) => {
            let undoneLessons = [];
            lessons.docs.forEach((lesson) => {
              undoneLessons.push(lesson.data());
            });
            dispatch({
              type: ACTION_TYPE.GET_UNDONE_LESSONS,
              payload: { undoneLessons },
            });
          })
          .catch((error) => console.log(error))
      );
  };
};

export const getCurrentLesson = (userId, courseName) => {
  return (dispatch, getState, { firebase }) => {
    const firestore = firebase.firestore();
    let currentLessonsName = "none";
    firestore
      .collection("usersLessonProgress")
      .doc(userId + courseName)
      .get()
      .then((userLessonProgress) => {
        userLessonProgress.data().lessons.forEach((lesson) => {
          if (lesson.status === "current")
            currentLessonsName = lesson.lessonName;
        });
      })
      .then(() =>
        firestore
          .collection("lessons")
          .where("lessonName", "==", currentLessonsName)
          .where("courseName", "==", courseName)
          .get()
          .then((lesson) => {
            let currentLesson = "";
            if (lesson.exists) {
              currentLesson = lesson.data();
            }
            dispatch({
              type: ACTION_TYPE.GET_CURRENT_LESSON,
              payload: { currentLesson },
            });
          })
          .catch((error) => console.log(error))
      );
  };
};

export const getPassedLessons = (userId, courseName) => {
  return (dispatch, getState, { firebase }) => {
    const firestore = firebase.firestore();
    let passedLessonsName = ["none"];
    firestore
      .collection("usersLessonProgress")
      .doc(userId + courseName)
      .get()
      .then((userLessonProgress) => {
        userLessonProgress.data().lessons.forEach((lesson) => {
          if (lesson.status === "passed")
            passedLessonsName.push(lesson.lessonName);
        });
      })
      .then(() =>
        firestore
          .collection("lessons")
          .where("lessonName", "in", passedLessonsName)
          .where("courseName", "==", courseName)
          .get()
          .then((lessons) => {
            let passedLessons = [];
            lessons.docs.forEach((lesson) => {
              passedLessons.push(lesson.data());
            });
            dispatch({
              type: ACTION_TYPE.GET_PASSED_LESSONS,
              payload: { passedLessons },
            });
          })
          .catch((error) => console.log(error))
      );
  };
};

export const isEnteringClass = (userId, lesson) => {
  return (dispatch, getstate, { firebase }) => {};
};
