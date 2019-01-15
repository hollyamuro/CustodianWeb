"use strict";

import { combineReducers } from "redux";
import customers from "./customers";
import statusFilter from "./statusFilter";
import idFilter from "./idFilter";
import activeFilter from "./activeFilter";
import { isLoading } from "./loadings";
import { isMsgShown, msg } from "./message";

export default combineReducers({
	idFilter,
	activeFilter,
	statusFilter,
	customers,
	isLoading,
	isMsgShown,
	msg,
});
