import api from "../../api/apiServer";
import { loginRequest, loginSucces, loginError, logOut } from "./authActions";

const login = param => dispatch => {
  dispatch(loginRequest());
  api
    .login()
    .then(responce => dispatch(loginSucces(responce)))
    .catch(error => dispatch(loginError(error)))
    .finally(dispatch(loginRequest()));
};

const loginErr = param => dispatch => {
  dispatch(loginRequest());
  api
    .loginErr()
    // .then(responce => dispatch(loginSucces(responce)))
    .then(error => dispatch(loginError(error)))
    .finally(dispatch(loginRequest()));
};

export {login, loginErr}