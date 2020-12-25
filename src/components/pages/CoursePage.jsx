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
import { Redirect } from "react-router-dom";

const CoursePage = (props) => {
  const { lessons, auth } = props;
  const [plusExperience] = useState("");

  if (!auth.loggedIn) return <Redirect to="/signin" />;

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
          <div className="course-name">Course: {'chua biet'.toUpperCase()}</div>
        </div>
        <div className="lessons-container-link">
          {lessons &&
            lessons.map((lesson) => (
              <Lesson
                key={lesson.code}
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

const mapStateToProps = (state, ownProps) => {
  // const id = ownProps.match.params.coursename;
  // const allLessons = state.firestore.data.lessons;
  return {
    lessons: state.firestore.ordered.lessons,
    auth: state.auth,
  };
};

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([{ collection: "lessons" }])
)(CoursePage);
