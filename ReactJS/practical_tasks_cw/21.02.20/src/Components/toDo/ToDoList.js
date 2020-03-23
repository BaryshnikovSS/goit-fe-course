import React from "react";
import { connect } from "react-redux";
import { deleteToDo } from "../../redux/todo/todoAction";

const ToDoList = ({ todo, deleteToDo }) => {
    console.log(todo);
  return (
    <ul>
      {todo.map(({ item, description, id }) => (
        <li key={id}>
          <h4>{item}</h4>
          <p>{description}</p>
          <button>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, { deleteToDo })(ToDoList);
