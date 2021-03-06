"use strict";

import {
	REQUEST_LOAD_DEPTS,
	RECEIVE_LOAD_DEPTS,
	REQUEST_LOAD_EMPLOYEES_IN_DEPTS,
	RECEIVE_LOAD_EMPLOYEES_IN_DEPTS,
	REQUEST_LOAD_EMPLOYEES_IN_SYSTEM,
	RECEIVE_LOAD_EMPLOYEES_IN_SYSTEM,
	REQUEST_DELETE_EMPLOYEE_TO_SYSTEM,
	RECEIVE_DELETE_EMPLOYEE_TO_SYSTEM,
	REQUEST_ADD_EMPLOYEE_TO_SYSTEM,
	RECEIVE_ADD_EMPLOYEE_TO_SYSTEM,
	START_LOADING,
	STOP_LOADING,
} from "../actions";

export const isLoading = (state = false, action) => {
	switch(action.type){
	case REQUEST_LOAD_DEPTS:
	case RECEIVE_LOAD_DEPTS:
	case REQUEST_LOAD_EMPLOYEES_IN_DEPTS:
	case RECEIVE_LOAD_EMPLOYEES_IN_DEPTS:
	case REQUEST_LOAD_EMPLOYEES_IN_SYSTEM:
	case RECEIVE_LOAD_EMPLOYEES_IN_SYSTEM:
	case REQUEST_DELETE_EMPLOYEE_TO_SYSTEM:
	case RECEIVE_DELETE_EMPLOYEE_TO_SYSTEM:
	case REQUEST_ADD_EMPLOYEE_TO_SYSTEM:
	case RECEIVE_ADD_EMPLOYEE_TO_SYSTEM:
	case START_LOADING:
	case STOP_LOADING:
		return action.isLoading;
	default:
		return state;
	}
};
    