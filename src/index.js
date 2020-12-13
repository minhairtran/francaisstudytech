import React from "react";
import ReactDOM from "react-dom";
import "./css/web.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
