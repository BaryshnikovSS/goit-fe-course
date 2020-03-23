import React from "react";

const Form = ({addElem}) => {

  const handleSubmit = e => {
    e.preventDefault();
    const [input] = e.target.elements
    addElem(input.value);
    input.value = '';    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="value" type="text" />
      </form>
    </>
  );
};

export default Form;
