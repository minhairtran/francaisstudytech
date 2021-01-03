import { ACTION_TYPE } from "../reducers/questionReducer";

export const getAllQuestionsCode = (lessonCode, courseName) => {
  return (dispatch, getState, { firebase }) => {
    const firestore = firebase.firestore();
    let questionsCode = ["none"];
    let questionsData = [];
    firestore
      .collection("lessons")
      .where("lessonCode", "==", lessonCode)
      .get()
      .then((lessons) => {
        if (lessons.docs) {
          lessons.docs.forEach((lesson) => {
            lesson.data().questions.forEach((questionCode) => {
              questionsCode.push(questionCode);
            });
          });
        }
      })
      .then(() => {
        firestore
          .collection("question")
          .where("code", "in", questionsCode)
          .get()
          .then((questions) => {
            questions.docs.forEach((question) => {
              questionsData.push(question.data());
            });
          })
          .then(() =>
            dispatch({
              type: ACTION_TYPE.GET_ALL_QUESTIONS_OF_LESSON,
              payload: questionsData,
            })
          );
      });
  };
};
