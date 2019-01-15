"use strict";
import { SET_STATUS_FILTER, } from "../actions";
import { StatusFilters } from "../constants";

const statusFilter = (state = StatusFilters.SHOW_ALL, action) => {
	switch (action.type) {
	case SET_STATUS_FILTER:
		return action.statusFilter;
	default:
		return state;
	}
};

export default statusFilter;
