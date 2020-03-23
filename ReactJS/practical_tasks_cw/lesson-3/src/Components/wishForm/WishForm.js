import React, { Component } from "react";
import shortId from "shortid";
import Select from "../select/Select";

const INITIALL_STATE = {
  title: "",
  date: new Date().toDateString(),
  // id: shortId(),
  priority: ""
};

class WishForm extends Component {
  state = { ...INITIALL_STATE };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.getFormValueWish({ ...this.state, id: shortId() });
    this.setState({ ...INITIALL_STATE });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  chooseSelect = param => {
    this.setState({ priority: param.value });
  };

  render() {
    const { title } = this.state;
    return (
      <>
        <Select onChooseSelect={this.chooseSelect} />
        <form onSubmit={this.handleSubmit}>
          <input
            minLength={5}
            maxLength={15}
            type="text"
            name="title"
            onChange={this.handleChange}
            value={title}
          />
        </form>
      </>
    );
  }
}

export default WishForm;
