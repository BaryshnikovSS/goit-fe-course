import React, {useContext} from "react";
import { WishContext } from "../../context/wishContext";
import shortId from 'shortid'

const Form = () => {
  const context = useContext(WishContext);

  console.log(context);

//   const {dispatch} = context;

  const handleSubmite = e => {
    e.preventDefault();
    const [input] = e.target.elements;
    // dispatch(addWish({title: input.value, id: shortId()}));
    context.getValue({title: input.value, id: shortId()});
    input.value = '';
  };

  return (
    <form onSubmit={handleSubmite}>
      <input  />
    </form>
  );
};

export default Form;
