import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import AboutPage from "../pages/aboutPage/AboutPage";
import Form from "../Components/form/Form";

function App() {
  return (
    <>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/login">LOGIN</NavLink>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={Form} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}

export default App;
