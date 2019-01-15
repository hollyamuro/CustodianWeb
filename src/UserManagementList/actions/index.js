"use strict";

import axios from "axios";
import { Unauthorized } from "../../SinoComponent/SinoErrorHandler";

/**
 * action type & action creators
 */

export const REQUEST_LOAD_DEPTS = "REQUEST_LOAD_DEPTS";
export const RECEIVE_LOAD_DEPTS = "RECEIVE_LOAD_DEPTS";
export const LOAD_DEPTS = "LOAD_DEPTS";

export const requestLoadDepts = () => ({
	type: REQUEST_LOAD_DEPTS,
	isLoading: true,
});
export const receiveLoadDepts = (depts) => ({
	type: RECEIVE_LOAD_DEPTS,
	isLoading: false,
	depts,
});
export const loadDepts = () => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestLoadDepts());

			//do request
			const result =
				await axios.post(location.protocol + "//" + location.host + "/helper/depts", {});

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveLoadDepts(result.data.data.map((d) => ({
				value: d.d_dept_no,
				label: d.d_dept_na
			}))));

		} catch (err) {
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
	};
};


export const SET_SELECTED_DEPT = "SET_SELECTED_DEPT";
export const setSelectedDept = (selectedDept) => ({
	type: SET_SELECTED_DEPT,
	selectedDept,
});


export const REQUEST_LOAD_EMPLOYEES_IN_DEPTS = "REQUEST_LOAD_EMPLOYEES_IN_DEPTS";
export const RECEIVE_LOAD_EMPLOYEES_IN_DEPTS = "RECEIVE_LOAD_EMPLOYEES_IN_DEPTS";
export const LOAD_EMPLOYEES_IN_DEPTS = "LOAD_EMPLOYEES_IN_DEPTS";

export const requestLoadEmployeesInDept = () => ({
	type: REQUEST_LOAD_EMPLOYEES_IN_DEPTS,
	isLoading: true,
});
export const receiveLoadEmployeesInDept = (employeesInDept) => ({
	type: RECEIVE_LOAD_EMPLOYEES_IN_DEPTS,
	isLoading: false,
	employeesInDept,
});
export const loadEmployeesInDept = () => {
	return async (dispatch, getState) => {
		try {
			//start request
			dispatch(requestLoadEmployeesInDept());

			//do request
			const result =
				await axios.post(location.protocol + "//" + location.host + "/helper//employeesInDept", {
					"data": { "dept_no": getState().selectedDept.value }
				});

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveLoadEmployeesInDept(result.data.data));

		} catch (err) {
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
	};
};



export const REQUEST_LOAD_EMPLOYEES_IN_SYSTEM = "REQUEST_LOAD_EMPLOYEES_IN_SYSTEM";
export const RECEIVE_LOAD_EMPLOYEES_IN_SYSTEM = "RECEIVE_LOAD_EMPLOYEES_IN_SYSTEM";
export const LOAD_EMPLOYEES_IN_SYSTEM = "LOAD_EMPLOYEES_IN_SYSTEM";

export const requestLoadEmployeesInSystem = () => ({
	type: REQUEST_LOAD_EMPLOYEES_IN_SYSTEM,
	isLoading: true,
});
export const receiveLoadEmployeesSystem = (employeesInSystem) => ({
	type: RECEIVE_LOAD_EMPLOYEES_IN_SYSTEM,
	isLoading: false,
	employeesInSystem,
});
export const loadEmployeesInSystem = () => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestLoadEmployeesInSystem());

			//do request
			const result =
				await axios.post(location.protocol + "//" + location.host + "/S099C001F001/read", { data: {} });

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveLoadEmployeesSystem(result.data.data));

		} catch (err) {
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
	};
};



export const REQUEST_ADD_EMPLOYEE_TO_SYSTEM = "REQUEST_ADD_EMPLOYEE_TO_SYSTEM";
export const RECEIVE_ADD_EMPLOYEE_TO_SYSTEM = "RECEIVE_ADD_EMPLOYEE_TO_SYSTEM";
export const ADD_EMPLOYEE_TO_SYSTEM = "ADD_EMPLOYEE_TO_SYSTEM";

export const requestAddEmployeeToSystem = () => ({
	type: REQUEST_ADD_EMPLOYEE_TO_SYSTEM,
	isLoading: true,
});
export const receiveAddEmployeeToSystem = () => ({
	type: RECEIVE_ADD_EMPLOYEE_TO_SYSTEM,
	isLoading: false,
});
export const addEmployeeToSystem = (employee) => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestAddEmployeeToSystem());

			//do request
			const result =
				await axios.post(location.protocol + "//" + location.host + "/S099C001F001/create", {
					"data": { "employee_id": employee.employee_id }
				});

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveAddEmployeeToSystem());

			//clean up
			dispatch(refresh());

			//show message
			dispatch(showMessage({
				type: result.data.code.type,
				title: result.data.code.type,
				text: result.data.code.message,
			}));
		} catch (err) {
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
	};
};



export const REQUEST_DELETE_EMPLOYEE_TO_SYSTEM = "REQUEST_DELETE_EMPLOYEE_TO_SYSTEM";
export const RECEIVE_DELETE_EMPLOYEE_TO_SYSTEM = "RECEIVE_DELETE_EMPLOYEE_TO_SYSTEM";
export const DELETE_EMPLOYEE_TO_SYSTEM = "DELETE_EMPLOYEE_TO_SYSTEM";

export const requestDeleteEmployeeToSystem = () => ({
	type: REQUEST_DELETE_EMPLOYEE_TO_SYSTEM,
	isLoading: true,
});
export const receiveDeleteEmployeeToSystem = () => ({
	type: RECEIVE_DELETE_EMPLOYEE_TO_SYSTEM,
	isLoading: false,	
});
export const deleteEmployeeToSystem = (employee) => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestDeleteEmployeeToSystem());

			//do request
			const result =
				await axios.post(location.protocol + "//" + location.host + "/S099C001F001/delete", {
					"data": { "employee_id": employee.employee_id }
				});

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveDeleteEmployeeToSystem());

			//clean up
			dispatch(refresh());
			
			//show message
			dispatch(showMessage({
				type: result.data.code.type,
				title: result.data.code.type,
				text: result.data.code.message,
			}));
		} catch (err) {
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
	};
};



export const REFRESH = "REFRESH";
export const refresh = () => {
	return async (dispatch) => {
		try {
			dispatch(loadDepts());
			dispatch(loadEmployeesInDept());
			dispatch(loadEmployeesInSystem());
		} catch (err) {
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
	};
};


export const SET_EMPLOYEES_IN_DEPT_FILTER = "SET_EMPLOYEES_IN_DEPT_FILTER";
export const setEmployeesInDeptFilter = (employeesInDeptFilter) => ({
	type: SET_EMPLOYEES_IN_DEPT_FILTER,
	employeesInDeptFilter,
});

export const SET_EMPLOYEES_IN_SYSTEM_FILTER = "SET_EMPLOYEES_IN_SYSTEM_FILTER";
export const setEmployeesInSystemFilter = (employeesInSystenFilter) => ({
	type: SET_EMPLOYEES_IN_SYSTEM_FILTER,
	employeesInSystenFilter,
});



//show message alert
export const SHOW_MESSAGE = "SHOW_MESSAGE";
export const HIDE_MESSAGE = "HIDE_MESSAGE";

export const showMessage = (msg) => ({
	type: SHOW_MESSAGE,
	isMsgShown: true,
	msg,
});
export const hideMessage = () => ({
	type: HIDE_MESSAGE,
	isMsgShown: false,
});

//stop loading
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export const startLoading = () => ({
	type: START_LOADING,
	isLoading: true,
});
export const stopLoading = () => ({
	type: STOP_LOADING,
	isLoading: false,
});

