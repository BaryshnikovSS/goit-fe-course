import React, { Component } from "react";
// import css from "./Comp1.module.css"
import styled from "styled-components";

const Div = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: blueviolet;
  background-color: blue;
`;

const styles = {
  backgroundColor: "red",
  width: "300px",
  height: "300px"
};

class Comp1 extends Component {
  state = {
      value: '',
  };

  getValue = (e) => {
      const value = e.target.value;
      this.setState({value});

  }

  render() {
    return (
      <Div>
        <form onSubmit={this.getObject}>
          <input type="text" onChange={this.getValue} value={this.state.value}/>
        </form>
        <div style={styles} className="pt-5 mt-5 ml-5 rounded-circle">
          Component1
        </div>
      </Div>
    );
  }
}

export default Comp1;
