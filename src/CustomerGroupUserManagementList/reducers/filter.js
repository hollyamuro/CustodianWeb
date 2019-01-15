"use strict";

import {
	SET_CUST_FILTER,
	SET_GROUP_CUST_FILTER
} from "../actions";

export const custFilter = (state = "", action) => {
	switch(action.type){
	case SET_CUST_FILTER:
		return action.custFilter;
	default:
		return state;
	}
};

export const groupCustFilter = (state="", action) => {
	switch(action.type){
	case SET_GROUP_CUST_FILTER:
		return action.groupCustFilter;
	default:
		return state;
	}
};
