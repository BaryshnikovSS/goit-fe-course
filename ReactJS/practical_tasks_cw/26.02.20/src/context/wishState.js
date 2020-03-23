import React, {useReducer} from "react";
import { WishContext } from "./wishContext";
import {WishReducer} from './WishReducer'

const initialState = {
  wishes: []
}

export const WishState = ({ children }) => {
  const [state, dispatch] = useReducer(WishReducer, initialState);

  const getValue = (value) => {
    console.log("value" , value) ;
    dispatch({type: 'ADD_WISH', payload: value})
  }
  return <WishContext.Provider value={{state, name: 'work', getValue}}>{children}</WishContext.Provider>;
};
