import Type from "../type";

// export const todo = (state = [], { type, payload }) => {
//   switch (type) {
//     case Type.TODO_ADD:
//       return [...state, payload];
//     case Type.TODO_DELETE:
//       return state.filter(el => el.id !== payload);
//     default:
//       return state;
//   }
// };

const handlers = {
  [Type.COUNTER_INCREMENT]: (state = [], { type, payload }) => [...state, payload],
  [Type.COUNTER_DECREMENT]: (state = [], { type, payload }) => state.filter(el => el.id !== payload),
  DEFAULT: state => state
};

export const counter = (state = 0, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};
