import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import LandingPage from "./landingPage";
import About from "./aboutMe";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

// if using state, you need a class extending component
// but if not, you can do a function

const Main = () => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Redirect from="/" to="/" />
      <Redirect from="/personal-website/" to="/home" />
    </Switch>
  </HashRouter>
);

export default Main;
