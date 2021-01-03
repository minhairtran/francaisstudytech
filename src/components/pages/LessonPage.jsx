import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import FillingInTheBlankQuestion from "../sharedComponents/FillingInTheBlankQuestion";
import { getAllQuestionsCode } from "../../store/actions/questionActions";

const LessonPage = (props) => {
  const { isLoaded, userId, getAllQuestionsCode, match, questionsOfLesson } = props;

  useEffect(() => {
    if (isLoaded) {
      if (userId) {
        const lessonCode = match.params.lessonname;
        getAllQuestionsCode(lessonCode);
      }
    }
  }, [isLoaded, userId, match, getAllQuestionsCode]);

  
  console.log(questionsOfLesson)

  if (isLoaded) {
    if (!userId) return <Redirect to="/signin" />;
  }

  return (
    <>
      <div className="lesson-container">
        <div className="lesson-general-information">
          <Link to="/a1">
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />
          </Link>
          <div className="question-number">1/20</div>
        </div>
        <FillingInTheBlankQuestion />
        <Link to="/">Từ vựng và ngữ pháp</Link>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllQuestionsCode: (lessonCode) =>
      dispatch(getAllQuestionsCode(lessonCode)),
  };
};

const mapStateToProps = (state) => {
  return {
    isLoaded: state.firebase.auth.isLoaded,
    userId: state.firebase.auth.uid,
    questionsOfLesson: state.question.questionsOfLesson,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonPage);
