import React from "react";
import { hocConsumer } from "../HOC/hocConsumer";

const List = ({data, delWish}) => (
//   <WishContext.Consumer>
//     {({ data, delWish }) => (
      <ul>
        {data.map(({ wihs, id }) => (
          <li key={id}>
            <h2>{wihs}</h2>
            <button onClick={() => delWish(id)}>delete</button>
          </li>
        ))}
      </ul>
//     )}
//   </WishContext.Consumer>
);

export default hocConsumer(List)
