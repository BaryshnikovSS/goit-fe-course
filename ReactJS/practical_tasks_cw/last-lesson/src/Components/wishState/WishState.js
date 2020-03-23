import React from "react";
import shortId from "shortid";
import WishContext from "../wishContext/WishContext";

class WishState extends Component {
  state = { data: [] };

  addWish = e => {
    e.preventDefalt();
    const wish = e.target.elements[0].value;
    this.setState(prevState => ({
      data: [...prevState.dataa, { wish, id: shortId() }]
    }));
  };

  deleteWish = id => {
    this.setState(prev => ({ data: prev.filter(wish => wish.id !== id) }));
  };

  render() {
    return (
      <WishContext.Provider
        value={{
          addWish: this.addWish,
          data,
          delWish: this.deleteWish
        }}
      >
        {this.props.childeren}
      </WishContext.Provider>
    );
  }
}

export default SearchState;
