import React from "react";
import { connect } from "react-redux";
import { delToDo } from "../redux/todo/todoActions";

const ToDoList = ({ data=[], delToDo }) => (
  <ul>
    {data.map(title => (
      <li key={title.id}>
        <h2>{title.title}</h2>
        <button onClick={() => delToDo(title.id)}>DELETE</button>
      </li>
))}
  </ul>
)

const mSTP = state => {
    console.log('state', state)
    return { data: state.todo };
}

// const mSDTP = {delToDo}

export default connect(mSTP, { delToDo })(ToDoList);
