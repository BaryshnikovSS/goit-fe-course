// import React, { useState, useEffect } from "react";
import React from "react";
import {WishState} from '../context/wishState'
import Form from './form/Form';
import List from './list/List'

const App = () => {
  return (
    <WishState>
      <Form />
      <List/>
    </WishState>
  );
};

export default App;

// ----------------------------------------------------------------------------------------

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   // useEffect (() => (console.log('DID MOUNT') ), []) // didMount
//   // useEffect (() => (console.log('DID MOUNT') ), [isOpen]) // didUpdate {isOpen}
//   useEffect (() => (console.log('DID MOUNT') ), [isOpen])

//   return (
//     <>
//     <button onClick={() => (setIsOpen(!isOpen))}>{`${isOpen}`}</button>
//     {isOpen && <h2>work</h2>}
//     </>
//   );
// }

// export default App;
