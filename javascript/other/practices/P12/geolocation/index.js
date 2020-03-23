const getCurrentPositin = () => {
  const options = {
    timeout: 5000
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

getCurrentPositin()
  .then(location => console.log(location))
  .catch(error => console.log(error));

// -----------------------------------------------------------------------------

// const onGetPositionSucces = location => {
//   console.log(location.coords);
// };

// const onGetPositionError = error => {
//   console.log(error);
// };

// const options = {
//     timeout: 5000
// }

// navigator.geolocation.getCurrentPosition(
//   onGetPositionSucces,
//   onGetPositionError,
//   options
// );
