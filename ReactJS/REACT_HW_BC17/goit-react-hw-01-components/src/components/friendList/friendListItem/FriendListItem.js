import React from "react";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ friends }) => {

  return (
    <>
      {friends.map(elem => {
        const { avatar, name, isOnline, id } = elem;
        return (
          <li key={id} className={css.item}>
            <span className={isOnline ? css.statusOn : css.statusOff}>
              {isOnline}
            </span>
            <img className={css.avatar} src={avatar} alt={id} width="48" />
            <h3 className={css.name}>{name}</h3>
          </li>
        );
      })}
    </>
  );
};

export default FriendListItem;
