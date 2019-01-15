import {
	// dept
	RECEIVE_LOAD_DEPTS,
	SET_SELECTED_DEPT,
	// employees in dept
	RECEIVE_LOAD_EMPLOYEES_IN_DEPTS,
	// employee in system
	RECEIVE_LOAD_EMPLOYEES_IN_SYSTEM,
	//filter
	SET_EMPLOYEES_IN_DEPT_FILTER,
	SET_EMPLOYEES_IN_SYSTEM_FILTER,
} from "../actions";

export const depts = (state = [], action) => {
	switch (action.type) {
	case RECEIVE_LOAD_DEPTS:
		return action.depts;
	default:
		return state;
	}
};

export const selectedDept = (
	state = {
		value: "",
		label: "",
	},
	action
) => {
	switch (action.type) {
	case SET_SELECTED_DEPT:
		return action.selectedDept;
	default:
		return state;
	}
};

export const employeesInDept = (state = [], action) => {
	switch (action.type) {
	case RECEIVE_LOAD_EMPLOYEES_IN_DEPTS:
		return action.employeesInDept;
	default:
		return state;
	}
};

export const employeesInSystem = (state = [], action) => {
	switch (action.type) {
	case RECEIVE_LOAD_EMPLOYEES_IN_SYSTEM:
		return action.employeesInSystem;
	default:
		return state;
	}
};

// filter
export const employeesInDeptFilter = (state = "", action) => {
	switch (action.type) {
	case SET_EMPLOYEES_IN_DEPT_FILTER:
		return action.employeesInDeptFilter;
	default:
		return state;
	}
};

export const employeesInSystenFilter = (state = "", action) => {
	switch (action.type) {
	case SET_EMPLOYEES_IN_SYSTEM_FILTER:
		return action.employeesInSystenFilter;
	default:
		return state;
	}
};

