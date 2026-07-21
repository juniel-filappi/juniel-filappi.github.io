import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={(props) =>
            settings.isSplash ? (
              <Splash {...props} theme={this.props.theme} />
            ) : (
              <Home {...props} theme={this.props.theme} />
            )
          }
        />
        <Route
          path="/home"
          exact
          render={(props) => <Home {...props} theme={this.props.theme} />}
        />
        <Route
          path="/experience"
          exact
          render={(props) => <Experience {...props} theme={this.props.theme} />}
        />
        <Route
          path="/education"
          exact
          render={(props) => <Education {...props} theme={this.props.theme} />}
        />
        <Route
          path="/contact"
          exact
          render={(props) => <Contact {...props} theme={this.props.theme} />}
        />

        {settings.isSplash && (
          <Route
            path="/splash"
            exact
            render={(props) => <Splash {...props} theme={this.props.theme} />}
          />
        )}

        <Route
          path="/projects"
          exact
          render={(props) => <Projects {...props} theme={this.props.theme} />}
        />
        <Route
          path="*"
          render={(props) => <Error404 {...props} theme={this.props.theme} />}
        />
      </Switch>
    );
  }
}
