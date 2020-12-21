import React, { useState, useEffect } from "react";
import Button from "../sharedComponents/Button";
import Input from "../sharedComponents/Input";
import logo from "../../images/Logo.png";
import Error from "../sharedComponents/Error";
import { Link } from "react-router-dom";
import PolicyContact from "../sharedComponents/PolicyContact";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

const Signin = (props) => {
  const { signIn, authError } = props;
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [signinError, setSigninError] = useState(false);

  const handleOnChange = (event) => {
    setCredentials({ ...credentials, [event.target.id]: event.target.value });
  };

  const signin = (event) => {
    event.preventDefault();
    signIn(credentials);
  };

  useEffect(() => {
    setSigninError(authError);
  }, [authError]);

  const handleError = () => {
    setSigninError(false);
  };

  return (
    <div className="container">
      <div className="registration">
        <img src={logo} alt="logo" />
        <div className="registration-link">
          <Link to="/signup">Đăng ký</Link> | <span>Đăng nhập</span>
        </div>
        <div className="form">
          <Input
            id="email"
            placeholder="Nhập email của bạn"
            title="Email"
            onChange={handleOnChange}
            type="email"
            onFocus={handleError}
          />
          {signinError && (
            <Error errorMessage="Email hoặc mật khẩu không tồn tại" />
          )}
          <Input
            id="password"
            placeholder="Nhập mật khẩu của bạn"
            title="Mật khẩu"
            onChange={handleOnChange}
            onFocus={handleError}
            type="password"
          />
        </div>
        <Link className="forget-password" to="/">
          Quên mật khẩu
        </Link>
        <Button
          type="submit"
          className="continue-button"
          title="Tiếp tục"
          status={
            credentials.email !== "" && credentials.password !== ""
              ? ""
              : "disable"
          }
          onClick={signin}
        />
      </div>
      <PolicyContact />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.firebase.auth.uid,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
