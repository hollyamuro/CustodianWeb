
import { connect } from "react-redux";
import EmployeesInSystemList from "../components/EmployeesInSystemList";
import { deleteEmployeeToSystem } from "../actions";

const getFilterList = (employees, keyword) => {
	return employees.filter((e) => {
		return (e.employee_id.includes(keyword) || e.employee_name.includes(keyword));
	});
};

const mapStateToProps = (state) => ({
	employees: getFilterList(state.employeesInSystem, state.employeesInSystenFilter),
	selectedGroup: state.selectedGroup,
});

const mapDispatchToProps = (dispatch) => ({
	onItemClicked: (employee) => {
		dispatch(deleteEmployeeToSystem(employee));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EmployeesInSystemList);
