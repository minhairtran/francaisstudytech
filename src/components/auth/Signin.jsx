import React, { useState } from "react";
import Button from "../sharedComponents/Button";
import Input from "../sharedComponents/Input";
import logo from "../../images/Logo.png";
import Error from "../sharedComponents/Error";
import { Link } from "react-router-dom";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signinError, setSigninError] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const signin = () => {
    setSigninError(true);
  };

  const handleError = () => {
    console.log("asdasd");
    setSigninError(false);
  };

  return (
    <div className="container">
      <div className="signin">
        <img src={logo} alt="logo" />
        <div className="registration-link">
          <Link to="/signup">Đăng ký</Link> | <span>Đăng nhập</span>
        </div>
        <div className="form">
          <Input
            placeholder="Nhập email của bạn"
            title="Email"
            onChange={handleEmail}
            type="email"
            onFocus={handleError}
          />
          {signinError && (
            <Error errorMessage="Email hoặc mật khẩu không tồn tại" />
          )}
          <Input
            placeholder="Nhập mật khẩu của bạn"
            title="Password"
            onChange={handlePassword}
            onFocus={handleError}
            type="password"
          />
        </div>

        <Button
          className="continue-button"
          title="Tiếp tục"
          status={email && password ? "" : "disable"}
          onClick={signin}
        />
      </div>
    </div>
  );
};

export default Signin;
