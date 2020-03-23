import { combineReducers } from "redux";
import {Types} from "./authTypes";

const user = (state = null, { type, payload }) => {
  switch (type) {
    case Types.LOGIN_SUCCES:
      return payload.user;
    case Types.LOGOUT:
      return null;
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case Types.LOGIN_SUCCES:
      return payload.token;
    case Types.LOGOUT:
      return null;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case Types.LOGIN_ERROR:
      return payload.error;
    default:
      return state;
  }
};

const isAuth = (state = false, { type, payload }) => {
  switch (type) {
    case Types.LOGIN_SUCCES:
      return true;
    case Types.LOGOUT: 
      return false;
    default:
      return false;
  }
};

// const user = (state = 0, { type, payload }) => {
//   switch (type) {
//     case Types.LOGIN_SUCCES:
//       return payload;
//     default:
//       return state;
//   }
// };

// const user = (state = 0, { type, payload }) => {
//   switch (type) {
//     case Types.LOGIN_SUCCES:
//       return payload;
//     default:
//       return state;
//   }
// };

// const user = (state = 0, { type, payload }) => {
//   switch (type) {
//     case Types.LOGIN_SUCCES:
//       return payload;
//     default:
//       return state;
//   }
// };

export const authReducer = combineReducers({user, token, error, isAuth})