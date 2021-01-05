import React, { useState } from "react";
import Answer from "./Answer";

const FillingInTheBlankQuestion = (props) => {
  const { questionOfLesson } = props;
  const [haveAnwserChosen, setHaveAnswerChosen] = useState(false);
  const [answerChosenStyle, setAnswerChosenStyle] = useState();

  const ref = React.createRef();

  const maxAnswerLetterNumber = () => {
    let answersLetterNumber = [];
    questionOfLesson.question.answers.map((answer) => {
      return answersLetterNumber.push(answer.answer.length);
    });
    return Math.max(...answersLetterNumber);
  };

  const questionContentBeforeBlank = () =>
    questionOfLesson.question.questionContent.substring(
      0,
      questionOfLesson.question.questionContent.indexOf("_")
    );

  const questionContentAterBlank = () =>
    questionOfLesson.question.questionContent.substring(
      questionOfLesson.question.questionContent.indexOf("_") + 1
    );

  const blank = () => {
    if (!haveAnwserChosen) {
      return "_".repeat(maxAnswerLetterNumber() + 8);
    } else {
      return " ".repeat(maxAnswerLetterNumber() * 5);
    }
  };

  const handleChoosingAwswer = (answer) => {
    setHaveAnswerChosen(!haveAnwserChosen);
    let unselectAnswer = false;
    if (answer.chosen) {
      unselectAnswer = true;
    }
    questionOfLesson.question.answers.map((answer) => {
      return (answer.chosen = null);
    });
    if (!unselectAnswer) {
      answer.chosen = true;
      setHaveAnswerChosen(true)
    }
    setAnswerChosenStyle({
      position: "absolute",
      top: ref.current.offsetTop - 16,
      left: ref.current.offsetLeft,
      animationDuration: 4,
      marginRight: 0,
    });
  };

  return (
    <div className="filling-in-the-blank">
      <div className="question-content">
        <span>{questionContentBeforeBlank()}</span>
        <span ref={ref}>{blank()}</span>
        <span>{questionContentAterBlank()}</span>
      </div>
      <div className="answers">
        {questionOfLesson.question.answers.map((answer, i) => {
          return (
            <Answer
              key={i}
              answer={answer.answer}
              onClick={handleChoosingAwswer.bind(this, answer)}
              className="answer"
              style={answer.chosen && answerChosenStyle}
              answerChosenStyle={answerChosenStyle}
            />
          );
        })}
      </div>
      <div className="voice-answer"></div>
      <div className="submit"></div>
    </div>
  );
};

export default FillingInTheBlankQuestion;
