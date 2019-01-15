"use strict";

import {
	REQUEST_LOAD_GROUPS,
	RECEIVE_LOAD_GROUPS,
	REQUEST_LOAD_GROUP_USERS,
	RECEIVE_LOAD_GROUP_USERS,
	REQUEST_LOAD_USERS,
	RECEIVE_LOAD_USERS,
	START_LOADING,
	STOP_LOADING,
} from "../actions";

export const isLoading = (state = false, action) => {
	switch (action.type) {
	case REQUEST_LOAD_GROUPS:
	case RECEIVE_LOAD_GROUPS:
	case REQUEST_LOAD_GROUP_USERS:
	case RECEIVE_LOAD_GROUP_USERS:
	case REQUEST_LOAD_USERS:
	case RECEIVE_LOAD_USERS:
	case START_LOADING:
	case STOP_LOADING:
		return action.isLoading;
	default:
		return state;
	}
};
