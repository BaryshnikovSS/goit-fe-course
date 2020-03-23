import React, { Component } from "react";
import { connect } from "react-redux";
import shortid from "shortid";
import { addToDo } from "../redux/todo/todoActions";

const initialState = { qwery: "" };

class Form extends Component {
  state = { ...initialState };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const createToDo = {
      id: shortid(),
      title: this.state.query
    };

    this.props.addToDo(createToDo);

    this.setState({ ...initialState });

    e.currentTarget[0].value = "";
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} velue={query} />
        <button type="submit">ADD</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addToDo
};

export default connect(null, mapDispatchToProps)(Form);
