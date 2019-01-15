"use strict";

import { combineReducers } from "redux";
import { 
	depts, 
	selectedDept, 
	employeesInDept, 
	employeesInSystem,
	employeesInDeptFilter,
	employeesInSystenFilter,
} from "./employees";
import { isLoading } from "./loadings";
import { isMsgShown, msg } from "./message";

export default combineReducers({
	depts,
	selectedDept,
	employeesInDept,
	employeesInSystem,
	employeesInDeptFilter,
	employeesInSystenFilter,
	isLoading,
	isMsgShown,
	msg,
});
