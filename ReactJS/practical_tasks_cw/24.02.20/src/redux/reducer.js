import Types from "./types";

const initialState = {
  tasks: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TASKS:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case Types.DELETE_TASKS:
      return {
        ...state,
        tasks: [...state.tasks.filter((_, index) => index !== action.payload)]
      };

    case Types.EDIT_TASKS:
      return {
        ...state,
        tasks: [
          ...state.tasks.reduce((acc, value, idx) => {
            action.payload.index === idx ? acc[idx] = `${action.payload.newTask}` : acc[idx] = value;
            return acc
          }, [])
        ]
      };

    default:
      return state;
  }
};
