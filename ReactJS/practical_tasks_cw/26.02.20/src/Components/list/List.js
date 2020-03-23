import React, { useContext } from "react";
import { WishContext } from "../../context/wishContext";

const FormList = () => {
  const context = useContext(WishContext)
  const {
    state: { wishes }
  } = useContext(WishContext);
  console.log(context)
  return (
    <ul>
      {wishes.map(({id, title, }) => 
      (<li key={id}>
        <h2>{title}</h2>
        {/* <button onClick={() => dispatch({type: DELETE_WISH, payload: id})}>DELETE</button> */}
      </li>))}
    </ul>
  );
};

export default FormList;
