import React, { Component } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "../pages/homePage/HomePage";
import AboutPage from "../pages/aboutPage/AboutPage";
import Form from "../Components/form/Form";
import SignUp from "../pages/signUp/SignUp";
import Spinner from "../Components/spinner/Spinner";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        {this.props.spinner && <Spinner />}
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/login">LOGIN</NavLink>
        <NavLink to="/signup">SIGN UP</NavLink>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={Form} />
            <Route path="/signup" component={SignUp} />
            <Redirect to="/" />
          </Switch>
        </div>
      </>
    );
  }
}

const mSTP = state => ({
  spinner: state.authReducer.spinner
});

export default connect(mSTP)(App);
