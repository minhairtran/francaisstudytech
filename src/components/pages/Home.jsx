import React, { useState } from "react";
import PolicyContact from "../sharedComponents/PolicyContact";
import Course from "../sharedComponents/Course";
import Navbar from "../sharedComponents/Navbar";
import { connect } from "react-redux";
import { enrollCourse } from "../../store/actions/courseActions";

const Home = (props) => {
  const { courses, enrollCourse } = props;
  const [plusExperience] = useState("");

  const handleEnrollCourse = (course) => {
    enrollCourse(course);
  };

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
            {courses &&
              courses.map(
                (enrolledCourse) =>
                  enrolledCourse.status === "enrolled" && (
                    <Course
                      key={enrolledCourse.name}
                      courseImage={enrolledCourse.img}
                      courseName={enrolledCourse.name}
                      courseImageAlt={enrolledCourse.alt}
                      coursePrice={enrolledCourse.price}
                    />
                  )
              )}
          </div>
        </div>
        <div className="courses-layout available-courses">
          <h3>Tất cả các khóa học khả dụng</h3>
          <div className="courses-link available-courses-link">
            {courses &&
              courses.map(
                (course) =>
                  course.status === "available" && (
                    <Course
                      key={course.name}
                      courseImage={course.img}
                      courseName={course.name}
                      courseImageAlt={course.alt}
                      coursePrice={course.price}
                      handleEnrollCourse={handleEnrollCourse}
                      course={course}
                    />
                  )
              )}
          </div>
        </div>
        <PolicyContact />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    enrollCourse: (course) => dispatch(enrollCourse(course)),
  };
};

const mapStateToProps = (state) => {
  return {
    courses: state.course.courses,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
