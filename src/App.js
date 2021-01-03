import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import CoursePage from "./components/pages/CoursePage";
import LessonPage from "./components/pages/LessonPage";
import { connect } from "react-redux";
import Navbar from "./components/sharedComponents/Navbar";
import { getAllEnrolledCoursesName } from "./store/actions/courseActions";
import ErrorPage from "./components/pages/ErrorPage";

const App = (props) => {
  const {
    userId,
    getAllEnrolledCoursesName,
    // enrolledCoursesName,
    isLoaded,
  } = props;

  useEffect(() => {
    if (isLoaded) {
      getAllEnrolledCoursesName(userId);
    }
    //eslint-disable-next-line
  }, [isLoaded]);

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
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/:coursename/:lessonname" component={LessonPage} />
          <Route
            exact
            path="/:coursename"
            component={CoursePage}
          />
          <Route exact path="/" component={Home} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.firebase.auth.uid,
    enrolledCoursesName: state.course.enrolledCoursesName,
    isLoaded: state.firebase.auth.isLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllEnrolledCoursesName: (userId) =>
      dispatch(getAllEnrolledCoursesName(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
