import Type from "../type";

export const addToDo = todo => ({
  type: Type.TODO_ADD,
  payload: todo
});

export const delToDo = id => ({
  type: Type.TODO_DELETE,
  payload: id
});
