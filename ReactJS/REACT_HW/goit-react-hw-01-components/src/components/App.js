import React from "react";
import user from "../user.json";
import statistic from "../statistical-data.json";
import friends from '../friends.json';
import transactions from '../transactions.json'
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics.js";
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory'

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={statistic} title={"Upload stats"} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </>
  );
};

export default App;
