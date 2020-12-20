import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Lesson from "../sharedComponents/Lesson";
import Navbar from "../sharedComponents/Navbar";
import { Link } from "react-router-dom";
import PolicyContact from "../sharedComponents/PolicyContact";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

const CoursePage = (props) => {
  const { lessons } = props
  const courseName = props.match.params.coursename;
  const [plusExperience] = useState("");

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
          <div className="course-name">Course: {courseName.toUpperCase()}</div>
        </div>
        <div className="lessons-container-link">
          {lessons && lessons.map((lesson) => (
            <Lesson
              key={lesson.id}
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

const mapStateToProps = (state) => {
  return {
    lessons: state.firestore.ordered.lessons,
  };
};

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([{ collection: "lessons" }])
)(CoursePage);
