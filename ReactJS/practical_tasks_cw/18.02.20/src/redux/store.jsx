import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { counter } from "./counter/counterReducer";
import {todo} from './todo/todoReducer'

const rootReducer = combineReducers({ counter, todo });

export const store = createStore(rootReducer, devToolsEnhancer());
