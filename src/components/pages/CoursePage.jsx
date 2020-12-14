import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Lesson from "../sharedComponents/Lesson";
import A1Course from "../../images/A1Course.png";

const CoursePage = (props) => {
  const [lessons, setLessons] = useState([
    { img: A1Course, id: 1, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 2, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 3, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 4, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 5, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 6, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 7, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 8, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 9, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 10, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 11, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 12, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 13, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 14, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 15, name: "Greeting", alt: "lesson-image" },
    { img: A1Course, id: 16, name: "Greeting", alt: "lesson-image" },
  ]);

  console.log(props);

  return (
    <div className="container">
      <FontAwesomeIcon icon={faArrowLeft} className="icon" />
      <div className="lesson-container">
      {lessons.map((lesson) => (
              <Lesson
                key={lesson.id}
                lessonImage={lesson.img}
                lessonName={lesson.name}
                lessonImageAlt={lesson.alt}
              />
            ))}
      </div>
    </div>
  );
};

export default CoursePage;
