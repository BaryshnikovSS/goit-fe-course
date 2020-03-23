import React from "react";
import  shortId  from "shortid";

const List = ({ arr, delElem }) => {
  const handleClick = (e) => {
    delElem(e.target.value)
  }

  return (
    <>
      <ul>
        {arr.map(el => 
          <li key={shortId()}>
            <h2>{el}</h2>
            <button value={el} onClick={handleClick}>DELETE</button>
          </li>
        )}
      </ul>
    </>
  );
};

export default List;
