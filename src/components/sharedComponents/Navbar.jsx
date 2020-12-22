import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const Navbar = (props) => {
  const { signOut } = props;

  return (
    <div className="navbar">
      <Link to="/" className="home-link">
        <FontAwesomeIcon icon={faHome} className="icon" />
        <div className="home-title">Trang chủ</div>
      </Link>
      <div className="level-user-information">
        <div className="level">
          {props.plusExperience && (
            <div className="plus-experience">+ {props.plusExperience}</div>
          )}
          {props.level}
          <progress value={props.currentExperience} max={props.maxExperience} />
        </div>
        <div className="user-information">
          <FontAwesomeIcon icon={faUserCircle} className="icon" />
          <div className="user-information-content">
            <div className="user-information-item">a</div>
            <div className="user-information-item">
              <Link to="/profile">My profile</Link>
            </div>
            <div className="user-information-item" onClick={signOut}>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

const mapStateToProps = (state) => {
  return {
    userId: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
