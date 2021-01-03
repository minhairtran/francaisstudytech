import React from "react";
import { Link } from "react-router-dom";

const Lesson = (props) => {
  
  return (
    <div className="lesson-link" onClick={props.onClick}>
      <Link to={`/${props.courseName.toLowerCase()}/${props.lessonCode}`}>
        <div className="lesson-link-content">
          <img src={props.lessonImage} alt={props.lessonImageAlt} />
          <div className="name-status">
            <div className="name">{props.lessonName}</div>
            <div
              className={
                props.lessonStatus === "passed"
                  ? "status passed"
                  : props.lessonStatus === "current"
                  ? "status current"
                  : "status"
              }
            ></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Lesson;
