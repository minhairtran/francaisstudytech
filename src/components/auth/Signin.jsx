import React, { useState } from "react";
import Button from "../sharedComponents/Button";
import Input from "../sharedComponents/Input";
import logo from "../../images/Logo.png";
import Error from "../sharedComponents/Error";
import { Link } from "react-router-dom";
import PolicyContact from "../sharedComponents/PolicyContact";
import { connect } from "react-redux";
import { signIn, enterCredential } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

const Signin = (props) => {
  const { signIn, signInError, enterCredential, auth } = props;
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleOnChange = (event) => {
    setCredentials({ ...credentials, [event.target.id]: event.target.value });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    signIn(credentials);
    if (auth.loggedIn) return <Redirect to="/" />;
  };

  if (auth.loggedIn) return <Redirect to="/" />;

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
            onFocus={enterCredential}
          />
          {signInError && (
            <Error errorMessage="Email hoặc mật khẩu không tồn tại" />
          )}
          <Input
            id="password"
            placeholder="Nhập mật khẩu của bạn"
            title="Mật khẩu"
            onChange={handleOnChange}
            onFocus={enterCredential}
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
          onClick={handleSignIn}
        />
      </div>
      <PolicyContact />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.firebase.auth.uid,
    signInError: state.auth.signInError,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
    enterCredential: () => dispatch(enterCredential()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
