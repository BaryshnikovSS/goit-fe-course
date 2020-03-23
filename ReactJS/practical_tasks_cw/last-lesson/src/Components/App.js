import React from "react";
import List from "./list/List";
import SearchState from "./wishState/WishState";
import Search from "./search/Search";

function App() {
  return (
    <SearchState>
      <Search />
      <List/>
    </SearchState>
  );
}

export default App;
