import React, { Component } from "react";
import Form from "../form/Form";
import ToDoList from '../toDoList/ToDoList';

class ToDo extends Component {
  state = {};
  render() {
    console.log(this.props);
    const { currentValues, addValue, deleteValue } = this.props;
    console.log(currentValues)
    return (
      <>
        <Form addElem={addValue}/>
        <ToDoList arr={currentValues} delElem={deleteValue}/>
      </>
    );
  }
}

export default ToDo;
