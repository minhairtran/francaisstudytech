import React from "react";
import { Link } from "react-router-dom";

const Course = (props) => {
  return (
    <div className="course-link">
      <Link to="/">
        <div className="course-link-content">
          <img src={props.courseImage} alt={props.courseImageAlt} />
          <ul className="name-price">
            <li>{props.courseName}</li>
            <li>Price: {props.coursePrice}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default Course;
