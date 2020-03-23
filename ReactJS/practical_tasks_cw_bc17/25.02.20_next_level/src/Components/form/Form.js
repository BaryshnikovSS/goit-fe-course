import React, { Component } from "react";
import { login, loginErr } from "../../redux/auth/authOperations";
import { connect } from "react-redux";

class Form extends Component {
  state = { email: "", password: "" };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.props)
    this.props.login(this.state)
    // this.props.history.location.pathname === "./signup" ? this.props.signup({email, name, password}) : this.props.signup({email, name, password})
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="TEXT"
            name={email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name={password}
            onChange={this.handleChange}
          />
          <button type="submit">login</button>
        </form>
      </>
    );
  }
}

export default connect(null, {login, loginErr})(Form);
