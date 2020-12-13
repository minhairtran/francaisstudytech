import React, { useState } from "react";
import Navbar from "../sharedComponents/Navbar";
import PolicyContact from "../sharedComponents/PolicyContact";
import A1Course from "../../images/A1Course.png";
import Course from "../sharedComponents/Course";

const Home = (props) => {
  const [plusExperience, setPlusExperience] = useState("");
  const [enrolledCourses, setenrolledCourses] = useState([
    {
      img: A1Course,
      name: "A1",
      price: "123$",
      id: "1",
      alt: "a1-course-image",
    },
    {
      img: A1Course,
      name: "A2",
      price: "Free",
      id: "2",
      alt: "a2-course-image",
    },
    {
      img: A1Course,
      name: "A3",
      price: "123$",
      id: "3",
      alt: "a3-course-image",
    },
    {
      img: A1Course,
      name: "A4",
      price: "Free",
      id: "4",
      alt: "a4-course-image",
    },
    {
      img: A1Course,
      name: "A5",
      price: "123$",
      id: "5",
      alt: "a5-course-image",
    },
    {
      img: A1Course,
      name: "A6",
      price: "Free",
      id: "6",
      alt: "a6-course-image",
    },
  ]);

  return (
    <div className="container">
      <Navbar
        level="Lv.1"
        currentExperience="10"
        maxExperience="100"
        plusExperience={plusExperience}
      />
      <div className="courses-container">
        <div className="enrolled-courses">
          <h3>Tất cả các khóa học đã đăng ký</h3>
          <div className="enrolled-courses-link">
            {enrolledCourses.map((enrolledCourse) => (
              <Course
                key={enrolledCourse.id}
                courseImage={enrolledCourse.img}
                courseName={enrolledCourse.name}
                courseImageAlt={enrolledCourse.alt}
                coursePrice={enrolledCourse.price}
              />
            ))}
          </div>
        </div>
        <div className="available-courses">
          <h3>Tất cả các khóa học khả dụng</h3>
          <div className="available-courses-link">
            {enrolledCourses.map((enrolledCourse, enrolledCourseId) => {})}
          </div>
        </div>

        <PolicyContact />
      </div>
    </div>
  );
};

export default Home;
