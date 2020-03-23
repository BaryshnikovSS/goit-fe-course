import axios from 'axios';
import {addToDo} from './todoAction'

export const ToDoPost = async (todo) => {
    const data = await axios.post('https://rn-todo-48cbb-firebasein.com/todos.json', todo);
    console.log(data);
}

export const ToDoGet = () => async (dispatch) => {
    const data = await axios.get('https://rn-todo-48cbb-firebasein.com/todos.json', todo);
    console.log("data.get:", data.data);
    const transData = Object.keys(data.data).map(key => ({...data.data[key], id: key}));
    console.log(transData)
}