import {createStore, combineReducers} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension'
import reducer from './reducers';

const rootReducer = combineReducers({
    value: reducer
});

export const store = createStore(rootReducer, devToolsEnhancer())