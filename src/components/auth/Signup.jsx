import React, { useState } from "react";
import Button from "../sharedComponents/Button";
import Input from "../sharedComponents/Input";
import logo from "../../images/Logo.png";
import Error from "../sharedComponents/Error";
import { Link } from "react-router-dom";
import PolicyContact from "../sharedComponents/PolicyContact";
import { connect } from "react-redux";
import { signUp, enterCredential } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom"

const Signup = (props) => {
  const { signUp, auth, enterCredential } = props;
  const [account, setAccount] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleOnChange = (event) => {
    setAccount({ ...account, [event.target.id]: event.target.value });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    signUp(account);
  };

  if (auth.loggedIn) return <Redirect to="/"/> 

  return (
    <div className="container">
      <div className="signup">
        <img src={logo} alt="logo" />
        <div className="registration-link">
          <span>Đăng ký</span> | <Link to="/signin">Đăng nhập</Link>
        </div>
        {auth.loggedIn ? (
          <h3 className="signup-successful">
            Xin chúc mừng bạn đã đăng ký thành công!!! Hãy xác thực email của
            bạn để bắt đầu nhé
          </h3>
        ) : (
          <div>
            <div className="form">
              <Input
                id="email"
                placeholder="Nhập email của bạn"
                title="Email"
                onChange={handleOnChange}
                type="email"
                onFocus={enterCredential}
              />
              {auth.signUpError &&
                auth.signUpError.code !== "auth/weak-password" && (
                  <Error errorMessage={auth.signUpError.message} />
                )}
              <Input
                id="password"
                placeholder="Nhập mật khẩu của bạn"
                title="Mật khẩu"
                onChange={handleOnChange}
                onFocus={enterCredential}
                type="password"
              />
              {auth.signUpError &&
                auth.signUpError.code === "auth/weak-password" && (
                  <Error errorMessage="Mật khẩu cần dài hơn 6 ký tự" />
                )}
              <Input
                id="passwordConfirmation"
                placeholder="Nhập lại mật khẩu của bạn"
                title="Xác nhận mật khẩu"
                onChange={handleOnChange}
                onFocus={enterCredential}
                type="password"
              />
              {auth.signUpFormPasswordConfirmationError && (
                <Error
                  errorMessage={auth.signUpFormPasswordConfirmationError}
                />
              )}
            </div>

            <Button
              type="submit"
              className="continue-button"
              title="Tiếp tục"
              status={
                account.email !== "" &&
                account.password !== "" &&
                account.passwordConfirmation !== ""
                  ? ""
                  : "disable"
              }
              onClick={handleSignUp}
            />
          </div>
        )}
      </div>
      <PolicyContact />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (account) => dispatch(signUp(account)),
    enterCredential: () => dispatch(enterCredential()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
