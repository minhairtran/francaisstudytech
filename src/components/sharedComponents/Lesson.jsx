import React from "react";
import { Link } from "react-router-dom";

const Lesson = (props) => {
  return (
    <div className="lesson-link">
      <Link to="/">
        <div className="lesson-link-content">
          <img src={props.lessonImage} alt={props.lessonImageAlt} />
          <div className="name-status">
            <div className="name">{props.lessonName}</div>
            <div className={props.status==="passed" ? props.status==="current" ? "status current" : "status passed" : "status"}></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Lesson;
