import axios from 'axios';

export const register = () => async dispatch => {
    const data = await axios.post(process.env.REACT_APP_BASE_REGISTER_URL)
}
export const logIn = () => {}
export const logOut = () => {}