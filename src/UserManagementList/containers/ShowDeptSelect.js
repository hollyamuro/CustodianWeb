
import { connect } from "react-redux";
import DeptSelect from "../components/DeptSelect";
import { setSelectedDept, refresh } from "../actions";

const mapStateToProps = (state) => ({
	hint: "請先選擇部門",
	selected: state.selectedDept,
	options: state.depts,
});

const mapDispatchToProps = (dispatch) => ({
	onItemSelected: (option) => {
		dispatch(setSelectedDept(option));
		dispatch(refresh());
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DeptSelect);
