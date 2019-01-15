
import { connect } from "react-redux";
import EmployeesInDeptList from "../components/EmployeesInDeptList";
import { addEmployeeToSystem } from "../actions";


const getCanShowEmployeesList = (employeesInDept, employeesInSystem) => {
	return (employeesInSystem.length === 0) ? employeesInDept : (employeesInDept.filter((ed) => {
		return !(employeesInSystem.map((es) => { return es.employee_id; }).includes(ed.employee_id));
	}));
};

const getFilterList = (employees, keyword) => {
	return employees.filter((e) => {
		return (e.employee_id.includes(keyword) || e.employee_name.includes(keyword));
	});
};

const mapStateToProps = (state) => ({
	employees: getFilterList(
		getCanShowEmployeesList(state.employeesInDept, state.employeesInSystem),
		state.employeesInDeptFilter
	),
	selectedGroup: state.selectedGroup,
});

const mapDispatchToProps = (dispatch) => ({
	onItemClicked: (employee) => {
		dispatch(addEmployeeToSystem(employee));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EmployeesInDeptList);
