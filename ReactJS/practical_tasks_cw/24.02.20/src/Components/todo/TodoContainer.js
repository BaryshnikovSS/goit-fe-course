import { connect } from "react-redux";
import Todo from "./Todo";
import { addTask, deleteTask, editTask } from "../../redux/action";

const mapStateToProps = ({ tasks }) => ({ tasks });

export default connect(mapStateToProps, ({addTask, deleteTask, editTask}))(Todo);

// --------------------------------------------------------------

// const mapStateToProps = state => {
//   return ({
//     tasks: state.tasks
//   });
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addTask: task => {
//       dispatch(addTask(task));
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Todo);
