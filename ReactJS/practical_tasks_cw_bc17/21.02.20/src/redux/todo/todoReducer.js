import Type from "../type";
import { addToDo, deleteToDo } from "./todoAction";

export const todoReducer = (state = [], { type, payload }) => {
  switch (type) {
      case Type.ADD_TODO: 
      return [...state, payload];

      case Type.DELETE_TODO: 
      return state.filter(note => note.id !== payload.id);

      default: 
      return state;
    };
};
