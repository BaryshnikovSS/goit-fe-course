import React, { Component } from "react";

class Todo extends Component {
  state = { task: "", newTask: "", id: null, isOpen: false };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTask(this.state.task);
  };

  editNewTask = e => {
    const id = e.target.id;
    this.setState(prev => ({ isOpen: !prev.isOpen, id: id }));
  };

  render() {
    const { task, newTask, isOpen, id } = this.state;
    const { tasks, deleteTask, editTask } = this.props;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="task"
            type="text"
            value={task}
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
        {isOpen && (
          <div id={id}>
            <input
              name="newTask"
              type="text"
              value={newTask}
              onChange={this.handleChange}
            />
            <button type="button" id={id} onClick={() => editTask(+id, newTask)}>
              save
            </button>
          </div>
        )}
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button
                type="button"
                id={index}
                onClick={() => deleteTask(index)}
              >
                DELETE
              </button>
              <button type="button" id={index} onClick={this.editNewTask}>
                EDIT
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Todo;
