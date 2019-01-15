"use strict";
import { SET_ACTIVE_FILTER, } from "../actions";
import { ActiveFilters } from "../constants";

const activeFilter = (state = ActiveFilters.SHOW_ALL, action) => {
	switch (action.type) {
	case SET_ACTIVE_FILTER:
		return action.activeFilter;
	default:
		return state;
	}
};

export default activeFilter;
