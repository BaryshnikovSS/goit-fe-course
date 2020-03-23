import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { todoReducer } from "./todo/todoReducer";

const rootReaduser = combineReducers({
    tools: todoReducer
});

export const store = createStore(rootReaduser, devToolsEnhancer());
