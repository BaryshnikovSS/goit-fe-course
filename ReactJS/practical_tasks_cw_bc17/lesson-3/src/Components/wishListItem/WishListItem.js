import React from "react";

// const chooseParam = param => {
//   let border;
//   switch (param) {
//     case "low":
//       border = { border: "1px solid red" };
//       break;
//     case "high":
//       border = { border: "1px solid purple" };
//       break;
//     default:
//       border = { border: "1px solid green" };
//       break;
//   }
// };

const choosePriority = {
  low: { border: "1px solid red" },
  high: { border: "1px solid purple" },
  normal: { border: "1px solid green" }
};

const WishListItem = ({ title, date, id, onDeleteWish, priority }) => {
  const styles = choosePriority[priority];
  //   const styles = chooseParam(priority);
  console.log(styles);
  return (
    <li style={styles}>
      <h2>{title}</h2>
      <p>{date}</p>
      <button type="button" onClick={() => onDeleteWish(id)}>
        delete
      </button>
    </li>
  );
};

export default WishListItem;

// onDeleteWish.bind(null, id) && () => (onDeleteWish(id))
