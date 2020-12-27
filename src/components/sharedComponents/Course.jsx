import React from "react";
import { Link } from "react-router-dom";

const Course = (props) => {
  const {
    courseImage,
    courseImageAlt,
    courseName,
    coursePrice,
    onClick,
  } = props;

  return (
    <div className="course-link" onClick={onClick}>
      <Link to={courseName.toLowerCase()}>
        <div className="course-link-content">
          <img src={courseImage} alt={courseImageAlt} />
          <ul className="name-price">
            <li>{courseName}</li>
            <li>Price: {coursePrice}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default Course;
