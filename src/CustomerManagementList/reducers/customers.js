"use strict";

import {
	RECEIVE_LOAD_CUST_LIST,
} from "../actions";

const customers = (state = [], action) => {
	switch (action.type) {
	case RECEIVE_LOAD_CUST_LIST:
		return action.customers;
	default:
		return state;
	}   
};

export default customers;
