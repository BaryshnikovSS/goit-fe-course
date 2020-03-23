import Types from "./types";

export const addTask = (task) => ({
  type: Types.ADD_TASKS,
  payload: task
});

export const deleteTask = (index) => ({
  type: Types.DELETE_TASKS,
  payload: index
});

export const editTask = (index, newTask) => ({
  type: Types.EDIT_TASKS,
  payload: {index, newTask}
});
