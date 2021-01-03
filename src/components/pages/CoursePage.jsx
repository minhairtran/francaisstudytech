import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Lesson from "../sharedComponents/Lesson";
import { Link } from "react-router-dom";
import PolicyContact from "../sharedComponents/PolicyContact";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  getCurrentLesson,
  getUndoneLessons,
  getPassedLessons,
  isEnteringClass,
} from "../../store/actions/lessonActions";

const CoursePage = (props) => {
  const {
    isLoaded,
    userId,
    getCurrentLesson,
    getUndoneLessons,
    getPassedLessons,
    currentLesson,
    passedLessons,
    undoneLessons,
    match,
    isEnteringClass,
  } = props;

  useEffect(() => {
    if (isLoaded) {
      if (userId) {
        const courseName = match.params.coursename.toUpperCase();
        setTimeout(() => {
          getCurrentLesson(userId, courseName);
          getPassedLessons(userId, courseName);
          getUndoneLessons(userId, courseName);
        }, 1500);
      }
    }
  }, [
    isLoaded,
    userId,
    getCurrentLesson,
    getUndoneLessons,
    getPassedLessons,
    match,
  ]);

  const handleEnteringClass = (lesson, userId) => {
    if (lesson && userId) {
      isEnteringClass(userId, lesson);
    }
  };

  if (isLoaded) {
    if (!userId) return <Redirect to="/signin" />;
  }

  return (
    <div className="lessons-container">
      <div className="course-infomation">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="icon" />
        </Link>
        <div className="course-name">Course: {"chua biet".toUpperCase()}</div>
      </div>
      <div className="lessons-container-link">
        {passedLessons.passedLessons &&
          passedLessons.passedLessons.map((lesson) => (
            <Lesson
              key={lesson.lessonCode}
              lessonImage={lesson.image}
              lessonCode={lesson.lessonCode}
              lessonImageAlt={lesson.alt}
              lessonStatus={lesson.status}
              courseName={lesson.courseName}
              lessonName={lesson.name}
            />
          ))}
        {currentLesson && currentLesson.currentLesson && (
          <Lesson
            key={currentLesson.currentLesson.lessonCode}
            lessonImage={currentLesson.currentLesson.image}
            lessonCode={currentLesson.currentLesson.lessonCode}
            lessonImageAlt={currentLesson.currentLesson.alt}
            courseName={currentLesson.courseName}
            lessonStatus={currentLesson.currentLesson.status}
            lessonName={currentLesson.name}
          />
        )}
        {undoneLessons.undoneLessons &&
          undoneLessons.undoneLessons.map((lesson) => (
            <Lesson
              key={lesson.lessonCode}
              lessonImage={lesson.image}
              lessonCode={lesson.lessonCode}
              lessonImageAlt={lesson.alt}
              courseName={lesson.courseName}
              lessonStatus={lesson.status}
              onClick={handleEnteringClass.bind(this, lesson, userId)}
              lessonName={lesson.name}
            />
          ))}
      </div>
      <PolicyContact />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentLesson: (userId, courseName) =>
      dispatch(getCurrentLesson(userId, courseName)),
    getPassedLessons: (userId, courseName) =>
      dispatch(getPassedLessons(userId, courseName)),
    getUndoneLessons: (userId, courseName) =>
      dispatch(getUndoneLessons(userId, courseName)),
    isEnteringClass: (userId, lesson) =>
      dispatch(isEnteringClass(userId, lesson)),
  };
};

const mapStateToProps = (state) => {
  return {
    currentLesson: state.lesson.currentLesson,
    undoneLessons: state.lesson.undoneLessons,
    passedLessons: state.lesson.passedLessons,
    auth: state.auth,
    isLoaded: state.firebase.auth.isLoaded,
    userId: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
