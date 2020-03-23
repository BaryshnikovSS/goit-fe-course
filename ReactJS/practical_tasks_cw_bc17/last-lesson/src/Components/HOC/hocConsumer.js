import React from "react";
import { WishContext } from "../wishContext/WishContext";

export const hocConsumer = BaseComponent => {
  const HocConsumer = props => {
    return (
      <WishContext.Consumer>
        {state => <BaseComponent {...props} {...state} />}
      </WishContext.Consumer>
    );
  };
  return HocConsumer;
};
