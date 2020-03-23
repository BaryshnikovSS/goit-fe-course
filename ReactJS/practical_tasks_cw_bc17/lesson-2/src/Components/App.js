import React, { Component } from "react";
import Comp1 from "./comp1/Comp1";

class App extends Component {
  state = { isComponentVisible: false, isMount: true };

  hendleClick = () =>
    this.setState(prevState => {
      console.log("isComponentVisible: ", this.state.isComponentVisible);
      console.log("this.state.isMount: ", this.state.isMount);
      return {
        isComponentVisible: !prevState.isComponentVisible,
        isMount: !prevState.isMount
      };
    });

  render() {
    return (
      <div>
        <button type="button" onClick={this.hendleClick}>
          Show Component
        </button>
        {this.state.isMount && <Comp1 />}
      </div>
    );
  }
}

export default App;
