import React, { useState, useEffect } from "react";
import PolicyContact from "../sharedComponents/PolicyContact";
import Course from "../sharedComponents/Course";
import Navbar from "../sharedComponents/Navbar";
import { connect } from "react-redux";
import {
  getAllAvailableCourses,
  getAllEnrolledCourses,
  enrollCourse,
} from "../../store/actions/courseActions";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const Home = (props) => {
  const {
    availableCourses,
    enrolledCourses,
    getAllAvailableCourses,
    getAllEnrolledCourses,
    userId,
    isLoaded,
    isEnrolling,
  } = props;
  const [plusExperience] = useState("");

  const handleEnrollCourse = (course) => {
    if (userId) {
      enrollCourse(userId, course);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      if (userId) {
        getAllAvailableCourses(userId);
        getAllEnrolledCourses(userId);
      }
    }
  }, [
    isLoaded,
    userId,
    getAllAvailableCourses,
    getAllEnrolledCourses,
    isEnrolling,
  ]);

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
      <div className="courses-container">
        <div className="courses-layout enrolled-courses">
          <h3>Tất cả các khóa học đã đăng ký</h3>
          <div className="courses-link enrolled-courses-link">
            {enrolledCourses.enrolledCourses &&
              enrolledCourses.enrolledCourses.map((enrolledCourse) => (
                <Course
                  key={enrolledCourse.name}
                  courseImage={enrolledCourse.image}
                  courseName={enrolledCourse.name}
                  courseImageAlt={enrolledCourse.alt}
                  coursePrice={enrolledCourse.price}
                />
              ))}
          </div>
        </div>
        <div className="courses-layout available-courses">
          <h3>Tất cả các khóa học khả dụng</h3>
          <div className="courses-link available-courses-link">
            {availableCourses.availableCourses &&
              availableCourses.availableCourses.map((availableCourse) => (
                <Course
                  key={availableCourse.name}
                  courseImage={availableCourse.image}
                  courseName={availableCourse.name}
                  courseImageAlt={availableCourse.alt}
                  coursePrice={availableCourse.price}
                  onClick={handleEnrollCourse.bind(this, availableCourse)}
                />
              ))}
          </div>
        </div>
        <PolicyContact />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllAvailableCourses: (userId) =>
      dispatch(getAllAvailableCourses(userId)),
    getAllEnrolledCourses: (userId) => dispatch(getAllEnrolledCourses(userId)),
    enrollCourse: (userId, course) => dispatch(enrollCourse(userId, course)),
  };
};

const mapStateToProps = (state) => {
  return {
    enrolledCourses: state.course.enrolledCourses,
    availableCourses: state.course.availableCourses,
    auth: state.auth,
    userId: state.firebase.auth.uid,
    isLoaded: state.firebase.auth.isLoaded,
    isEnrolling: state.course.isEnrolling,
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);
