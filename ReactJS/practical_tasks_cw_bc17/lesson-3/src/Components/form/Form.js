import React, { Component } from "react";

const INITIALL_STATE = {
  login: "",
  email: "",
  password: ""
};

class Form extends Component {
  state = { ...INITIALL_STATE };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getFormValue(this.state);

    this.setState({ ...INITIALL_STATE });
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {

    const { login, email, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="login"
            onChange={this.handleChange}
            value={login}
          />
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button type="submit">register</button>
        </form>
      </>
    )
  }
}

export default Form;
