import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import CoursePage from "./components/pages/CoursePage";
import LessonPage from "./components/pages/LessonPage";
import { connect } from "react-redux";
import Navbar from "./components/sharedComponents/Navbar";

const App = (props) => {
  const { userId } = props;
  return (
    <div className="container">
      <Router>
        {userId && (
          <Navbar
            level="Lv.1"
            currentExperience="10"
            maxExperience="100"
            plusExperience=""
          />
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/lessonname" component={LessonPage} />
          <Route path="/:coursename" component={CoursePage} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(App);
