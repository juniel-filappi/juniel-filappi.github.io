import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";
import "./Splash.css";

const SPLASH_DURATION = 1200;

function SplashScreen({ theme }) {
  return (
    <div className="splash-screen" style={{ backgroundColor: theme.splashBg }}>
      <div className="splash-screen__logo">
        <LoaderLogo theme={theme} />
      </div>
    </div>
  );
}

class Splash extends Component {
  state = { redirect: false };

  componentDidMount() {
    this.redirectTimer = setTimeout(
      () => this.setState({ redirect: true }),
      SPLASH_DURATION
    );
  }

  componentWillUnmount() {
    clearTimeout(this.redirectTimer);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <SplashScreen theme={this.props.theme} />
    );
  }
}

export default Splash;
