import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import FillingInTheBlankQuestion from "../sharedComponents/FillingInTheBlankQuestion";
import { getAllQuestionsCode } from "../../store/actions/questionActions";
import Button from "../sharedComponents/Button";

const LessonPage = (props) => {
  const {
    isLoaded,
    userId,
    getAllQuestionsCode,
    match,
    questionsOfLesson,
  } = props;

  let questionNumber = 0;

  let questionOfLesson = questionsOfLesson[0];

  const handleQuestionOfLesson = () => {
    questionNumber += 1;
    if (questionNumber < questionsOfLesson.length) {
      questionOfLesson = questionsOfLesson[questionNumber];
    } else {
      questionOfLesson = null;
    }
    return questionOfLesson;
  };

  useEffect(() => {
    if (isLoaded) {
      if (userId) {
        const lessonCode = match.params.lessonname;
        getAllQuestionsCode(lessonCode);
      }
    }
  }, [isLoaded, userId, match, getAllQuestionsCode]);

  const taskName = (questionType) => {
    switch (questionType) {
      case "fillingInTheBlank":
        return "Điền vào ô trống";
      default:
        return "Unknown question";
    }
  };

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
          <div className="question-name">
            {questionOfLesson && taskName(questionOfLesson.type)}
          </div>
        </div>
        {questionOfLesson && (
          <div className="question">
            <FillingInTheBlankQuestion questionOfLesson={questionOfLesson} />
          </div>
        )}
        <Button
          onClick={() => handleQuestionOfLesson()}
          title="Trả lời"
          className="continue-button answer-question-button"
        />
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
