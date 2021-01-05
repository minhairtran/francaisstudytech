import React from "react";

const Answer = (props) => {
  const { answer } = props;
  console.log(props.answerChosenStyle);
  console.log(props.style);
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      style={props.style}
    >
      {answer}
    </button>
  );
};

export default Answer;
