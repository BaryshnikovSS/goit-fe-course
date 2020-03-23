import {Types} from "./authTypes";

const loginRequest = () => ({
  type: Types.LOGIN_REQUEST
});

const loginSucces = data => ({
  type: Types.LOGIN_SUCCES,
  payload: data
});

const loginError = error => ({
  type: Types.LOGIN_ERROR,
  payload: error
});

const loginSignIn = data => ({
  type: Types.LOGIN_SIGN_IN,
  payload: data
});

const loginSignInSucces = data => ({
  type: Types.LOGIN_SIGN_IN_SUCCES,
  payload: data
});

const loginSignInError = error => ({
  type: Types.LOGIN_SIGN_IN_ERROR,
  payload: error
});

const logOut = () => ({
  type: Types.LOGOUT
});

export {
  loginRequest,
  loginSucces,
  loginError,
  loginSignIn,
  loginSignInSucces,
  loginSignInError,
  logOut
};
