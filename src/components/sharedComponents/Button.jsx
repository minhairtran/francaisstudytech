import React from "react";

const Button = (props) => {
  return (
    <div>
      {props.status !== "disable" ? (
        <button className={props.className} onClick={props.onClick}>{props.title}</button>
      ) : (
      <button className="disable-button" disabled>{props.title}</button>
      )}
    </div>
  );
};

export default Button;
