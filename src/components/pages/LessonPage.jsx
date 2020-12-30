import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const LessonPage = (props) => {
  const { isLoaded, userId } = props;

  if (isLoaded) {
    if (!userId) return <Redirect to="/signin" />;
  }

  return (
    <>
      <div className="lesson-container">
        <div className="lesson-general-information">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />
          </Link>
          <div className="question-number">1/20</div>
        </div>
        <Link to="/">Từ vựng và ngữ pháp</Link>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  return {
    isLoaded: state.firebase.auth.isLoaded,
    userId: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonPage);
