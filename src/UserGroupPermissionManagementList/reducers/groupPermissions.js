"use strict";

import {
	// permissions
	RECEIVE_LOAD_GROUP_PERMISSIONS,
	// groups
	RECEIVE_LOAD_GROUPS,
	SET_SELECTED_GROUP,
	// permission list
	RECEIVE_LOAD_ALL_PERMISSIONS,
	// filter
	SET_PERMISSION_FILTER,
	SET_GROUP_PERMISSION_FILTER
} from "../actions";


// permissions
export const groupPermissions = (state = [], action) => {
	switch (action.type) {
	case RECEIVE_LOAD_GROUP_PERMISSIONS:
		return action.groupPermissions;
	default:
		return state;
	}
};

// groups
export const groups = (state = {}, action) => {
	switch (action.type) {
	case RECEIVE_LOAD_GROUPS:
		return action.groups;
	default:
		return state;
	}
};

export const selectedGroup = (state = "", action) => {
	switch (action.type) {
	case SET_SELECTED_GROUP:
		return action.selectedGroup;
	default:
		return state;
	}
};

// permission list
export const permissions = (state = [], action) => {
	switch (action.type) {
	case RECEIVE_LOAD_ALL_PERMISSIONS:
		return action.permissions;
	default:
		return state;
	}
};

// filter
export const permissionFilter = (state = "", action) => {
	switch (action.type) {
	case SET_PERMISSION_FILTER:
		return action.permissionFilter;
	default:
		return state;
	}
};

export const groupPermissionFilter = (state = "", action) => {
	switch (action.type) {
	case SET_GROUP_PERMISSION_FILTER:
		return action.groupPermissionFilter;
	default:
		return state;
	}
};