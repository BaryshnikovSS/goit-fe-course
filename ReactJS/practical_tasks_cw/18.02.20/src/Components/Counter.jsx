import React from "react";
// import { connect } from "react-redux";
// import { increment, decrement } from "../redux/counter/counterActions";

// const Counter = ({ defaultValue, plus, minus }) => (
//   <>
//     <button onClick={() => plus(1)}>INCREMENT</button>
//     <h2>{defaultValue}</h2>
//     <button onClick={() => minus(1)}>DECREMENT</button>
//   </>
// );

// const Counter = ({ defaultValue, plus, minus }) => (

const Counter = ({ defaultValue, increment, decrement }) => (
  <>
    <button onClick={increment(1)}>INCREMENT</button>
    <h2>{defaultValue}</h2>
    <button onClick={decrement(1)}>DECREMENT</button>
  </>
);

// const mapStateToProps = state => ({ defaultValue: state });

// const mapDispatchToProps = dispatch => ({
//   plus: param => dispatch(increment(param)),
//   minus: param => dispatch(decrement(param))
// });

// const mapDispatchToProps = {
//   increment,
//   decrement
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
