import { connect } from "react-redux";
import { addValue, deleteValue } from "../../redux/actionCreators";
import ToDo from "../toDo/ToDo";

const mapStateToProps = (state, props) => ({
  currentValues: state.value
});

const mapDispatchToProps = dispatch => ({
  addValue: value => dispatch(addValue(value)),
  deleteValue: value => dispatch(deleteValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
