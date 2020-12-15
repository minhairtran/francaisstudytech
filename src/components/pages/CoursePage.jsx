import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Lesson from "../sharedComponents/Lesson";
import A1Course from "../../images/A1Course.png";
import Navbar from "../sharedComponents/Navbar";
import { Link } from "react-router-dom";
import PolicyContact from "../sharedComponents/PolicyContact";

const CoursePage = (props) => {
  const [plusExperience, setPlusExperience] = useState("");
  const [lessons, setLessons] = useState([
    { img: A1Course, id: 1, name: "Greeting", alt: "lesson-image", status: "passed" },
    { img: A1Course, id: 2, name: "Greeting", alt: "lesson-image", status: "current" },
    { img: A1Course, id: 3, name: "Greeting", alt: "lesson-image", status: "waiting" },
    { img: A1Course, id: 4, name: "Greeting", alt: "lesson-image", status: "waiting" },
    { img: A1Course, id: 5, name: "Greeting", alt: "lesson-image", status: "waiting" },
    { img: A1Course, id: 6, name: "Greeting", alt: "lesson-image", status: "waiting" },
    { img: A1Course, id: 7, name: "Greeting", alt: "lesson-image", status: "waiting" },
    { img: A1Course, id: 8, name: "Greeting", alt: "lesson-image", status: "waiting" },
    { img: A1Course, id: 9, name: "Greeting", alt: "lesson-image", status: "waiting" },
    { img: A1Course, id: 10, name: "Greeting", alt: "lesson-image", status: "waiting" },
    { img: A1Course, id: 11, name: "Greeting", alt: "lesson-image", status: "waiting" },
    { img: A1Course, id: 12, name: "Greeting", alt: "lesson-image", status: "waiting" },
    { img: A1Course, id: 13, name: "Greeting", alt: "lesson-image", status: "waiting" },
    { img: A1Course, id: 14, name: "Greeting", alt: "lesson-image", status: "waiting"},
    { img: A1Course, id: 15, name: "Greeting", alt: "lesson-image", status: "waiting" },
    { img: A1Course, id: 16, name: "Greeting", alt: "lesson-image", status: "waiting" },
  ]);

  console.log(props);

  return (
    <div className="container">
      <Navbar
        level="Lv.1"
        currentExperience="10"
        maxExperience="100"
        plusExperience={plusExperience}
      />
      <div className="lesson-container">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="icon" />
        </Link>
        <div className="lesson-container-link">
          {lessons.map((lesson) => (
            <Lesson
              key={lesson.id}
              lessonImage={lesson.img}
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

export default CoursePage;
