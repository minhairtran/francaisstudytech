import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Lesson from "../sharedComponents/Lesson";
import Navbar from "../sharedComponents/Navbar";
import { Link } from "react-router-dom";
import PolicyContact from "../sharedComponents/PolicyContact";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  getCurrentLesson,
  getUndoneLessons,
  getPassedLessons,
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
  } = props;
  const [plusExperience] = useState("");

  useEffect(() => {
    if (isLoaded) {
      if (userId) {
        const courseName = window.location.pathname.substring(1).toUpperCase();
        getCurrentLesson(userId, courseName);
        getUndoneLessons(userId, courseName);
        getPassedLessons(userId, courseName);
      }
    }
  }, [isLoaded, userId, getCurrentLesson, getUndoneLessons, getPassedLessons]);

  if (isLoaded) {
    if (!userId) return <Redirect to="/signin" />;
  }

  return (
    <div className="container">
      <Navbar
        level="Lv.1"
        currentExperience="10"
        maxExperience="100"
        plusExperience={plusExperience}
      />
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
                key={lesson.lessonName}
                lessonImage={lesson.image}
                lessonName={lesson.name}
                lessonImageAlt={lesson.alt}
                lessonStatus={lesson.status}
              />
            ))}
          {currentLesson && currentLesson.currentLesson && (
            <Lesson
              key={currentLesson.currentLesson.lessonName}
              lessonImage={currentLesson.currentLesson.image}
              lessonName={currentLesson.currentLesson.name}
              lessonImageAlt={currentLesson.currentLesson.alt}
              lessonStatus={currentLesson.currentLesson.status}
            />
          )}
          {undoneLessons.undoneLessons &&
            undoneLessons.undoneLessons.map((lesson) => (
              <Lesson
                key={lesson.lessonName}
                lessonImage={lesson.image}
                lessonName={lesson.name}
                lessonImageAlt={lesson.alt}
                lessonStatus={lesson.status}
              />
            ))}
        </div>
        <PolicyContact />
      </div>
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
