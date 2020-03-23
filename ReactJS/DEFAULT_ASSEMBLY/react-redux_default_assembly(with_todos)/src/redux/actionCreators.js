import Type from './type';

export const addValue = value => ({
    type: Type.ADD_VALUE,
    payload: value
});

export const deleteValue = value => ({
    type: Type.DELETE_VALUE,
    payload: value
})