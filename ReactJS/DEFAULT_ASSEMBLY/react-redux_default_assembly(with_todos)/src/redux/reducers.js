import Type from './type';

const initialState = ["work"];

const valueReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.ADD_VALUE:
            return [...state, action.payload];
        case Type.DELETE_VALUE:
            return state.filter(el => el !== action.payload)
        default:
            return state;
    }
}

export default valueReducer;