import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Link to="/" className="home-link">
        <FontAwesomeIcon icon={faHome} className="icon" />
        <div className="home-title">Trang chủ</div>
      </Link>
      <div className="level-profile">
        <div className="level">
          {props.plusExperience && (
            <div className="plus-experience">+ {props.plusExperience}</div>
          )}
          {props.level}
          <progress value={props.currentExperience} max={props.maxExperience} />
        </div>
        <Link to="/profile" className="profile">
          <FontAwesomeIcon icon={faUserCircle} className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
