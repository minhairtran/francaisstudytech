import React from "react";

const Input = (props) => {
  return (
    <div className="input-container">
      <div className="title">{props.title}</div>
      <input
        id={props.id}
        className="input"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        onFocus={props.onFocus}
      />
    </div>
  );
};

export default Input;
