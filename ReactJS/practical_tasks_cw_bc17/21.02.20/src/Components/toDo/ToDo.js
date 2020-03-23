import React, { Component } from "react";
import { connect } from "react-redux";
import { addToDo } from "../../redux/todo/todoAction";
import shortId from "shortid";

class ToDo extends Component {
  state = { title: "", discription: "" };

  handleClick = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addToDo({ ...this.state, id: shortId() });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h5>TODO LIST</h5>
        <input type="text" onClick={this.handleClick} name="title" />
        <input type="text" onClick={this.handleClick} name="discription" />
        <button type="submit">submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addToDo
};

export default connect(null, mapDispatchToProps)(ToDo);
