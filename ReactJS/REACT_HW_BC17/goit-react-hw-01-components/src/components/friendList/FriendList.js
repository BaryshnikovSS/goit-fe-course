import React from "react";
import FriendListItem from "./friendListItem/FriendListItem";
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default FriendList;