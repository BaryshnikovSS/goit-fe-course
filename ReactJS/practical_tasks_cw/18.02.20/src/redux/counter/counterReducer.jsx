import Type from "../type";

// export const counter = (state = 0, { type, payload }) => {
//   switch (type) {
//     case Type.COUNTER_INCREMENT:
//       return state + payload;
//     case Type.COUNTER_DECREMENT:
//       return state - payload;
//     default:
//       return state;
//   }
// };

const handlers = {
  [Type.COUNTER_INCREMENT]: (state = 0, { payload }) => state + payload,
  [Type.COUNTER_DECREMENT]: (state = 0, { payload }) => state - payload,
  DEFAULT: state => state
};

export const counter = (state = 0, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};
 