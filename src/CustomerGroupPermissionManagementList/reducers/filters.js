"use strict";

import {
	SET_PERMISSION_FILTER,
	SET_GROUP_PERMISSION_FILTER
} from "../actions";

export const permissionFilter = (state = "", action) => {
	switch(action.type){
	case SET_PERMISSION_FILTER:
		return action.permissionFilter;
	default:
		return state;
	}
};

export const groupPermissionFilter = (state = "", action) => {
	switch(action.type){
	case SET_GROUP_PERMISSION_FILTER:
		return action.groupPermissionFilter;
	default:
		return state;
	}
};