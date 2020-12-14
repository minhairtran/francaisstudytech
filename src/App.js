import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import CoursePage from "./components/pages/CoursePage";
import Navbar from "./components/sharedComponents/Navbar";

const App = (props) => {
  const [plusExperience, setPlusExperience] = useState("");
  return (
    <Router>
      <Navbar
        level="Lv.1"
        currentExperience="10"
        maxExperience="100"
        plusExperience={plusExperience}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/:coursename" component={CoursePage} />
      </Switch>
    </Router>
  );
};

export default App;
