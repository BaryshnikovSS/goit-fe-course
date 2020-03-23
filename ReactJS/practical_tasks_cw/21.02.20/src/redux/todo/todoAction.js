import Type from "../type";

export const addToDo = value => {
  return {
    type: Type.ADD_TODO,
    payload: value 
  };
};

export const deleteToDo = id => {
  return {
    type: Type.DELETE_TODO,
    payload:  id 
  };
};
