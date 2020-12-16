import React, { useState } from "react";
import Button from "../sharedComponents/Button";
import Input from "../sharedComponents/Input";
import logo from "../../images/Logo.png";
import Error from "../sharedComponents/Error";
import { Link } from "react-router-dom";
import PolicyContact from "../sharedComponents/PolicyContact";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [signupError, setSignupError] = useState(false);
  const [signupSuccessful, setSignupSuccessful] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordComfirmation = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const signup = () => {
    setSignupError(true);
    setSignupSuccessful(true)
  };

  const handleError = () => {
    setSignupError(false);
  };

  return (
    <div className="container">
      <div className="signup">
        <img src={logo} alt="logo" />
        <div className="registration-link">
          <span>Đăng ký</span> | <Link to="/signin">Đăng nhập</Link>
        </div>
        {signupSuccessful ? (
          <h3 className="signup-successful">
            Xin chúc mừng bạn đã đăng ký thành công!!! Hãy xác thực email của bạn
            để bắt đầu nhé
          </h3>
        ) : (
          <div>
            <div className="form">
              <Input
                placeholder="Nhập email của bạn"
                title="Email"
                onChange={handleEmail}
                type="email"
                onFocus={handleError}
              />
              {signupError && (
                <Error errorMessage="Email hoặc mật khẩu không tồn tại" />
              )}
              <Input
                placeholder="Nhập mật khẩu của bạn"
                title="Mật khẩu"
                onChange={handlePassword}
                onFocus={handleError}
                type="password"
              />
              {signupError && (
                <Error errorMessage="Email hoặc mật khẩu không tồn tại" />
              )}
              <Input
                placeholder="Nhập lại mật khẩu của bạn"
                title="Xác nhận mật khẩu"
                onChange={handlePasswordComfirmation}
                onFocus={handleError}
                type="password"
              />
              {signupError && (
                <Error errorMessage="Email hoặc mật khẩu không tồn tại" />
              )}
            </div>

            <Button
              className="continue-button"
              title="Tiếp tục"
              status={
                email && password && passwordConfirmation ? "" : "disable"
              }
              onClick={signup}
            />
          </div>
        )}
      </div>
      <PolicyContact />
    </div>
  );
};

export default Signup;
