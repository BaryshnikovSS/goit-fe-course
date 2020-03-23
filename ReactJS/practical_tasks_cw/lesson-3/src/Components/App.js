import React, { Component } from "react";
import Form from "./form/Form";
import WishForm from "./wishForm/WishForm";
import WishList from "./wishList/WishList";

class App extends Component {
  state = {
    isVisible: true,
    wishes: []
  };

  getFormValueAuth = value => {
    console.log("app -->", value);
    if (value) {
      this.setState({ isVisible: false });
    }
  };

  getFormValueWish = value => {
    this.setState(prev => {
      // console.log(prev);
      return {
        wishes: [...prev.wishes, value]
      };
    });
  };

  deleteWish = id => {
    this.setState(prev => ({
      wishes: prev.wishes.filter(elem => elem.id !== id)
    }));
  };

  chooseSelect = param => {
    console.log(param);
  };

  render() {
    const { isVisible, wishes } = this.state;
    console.log(wishes);
    return (
      <>
        {isVisible ? (
          <Form getFormValue={this.getFormValueAuth} />
        ) : (
          <>
            <WishForm
              getFormValueWish={this.getFormValueWish}
              onChooseSelect={this.chooseSelect}
            />
            {wishes.length !== 0 && (
              <WishList onDeleteWish={this.deleteWish} data={wishes} />
            )}
          </>
        )}
      </>
    );
  }
}

export default App;
