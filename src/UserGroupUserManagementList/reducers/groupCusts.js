"use strict";

import {
	// group users
	RECEIVE_LOAD_GROUP_USERS,
	// users
	RECEIVE_LOAD_USERS,
	// groups
	RECEIVE_LOAD_GROUPS,
	SET_SELECTED_GROUP,
	// filters
	SET_USER_FILTER,
	SET_GROUP_USER_FILTER,
} from "../actions";

// group users
export const groupUsers = (state=[], action) => {
	switch(action.type){
	case RECEIVE_LOAD_GROUP_USERS:
		return action.groupUsers;
	default:
		return state;
	}
};

// users
export const users = (state=[], action) => {
	switch(action.type){
	case RECEIVE_LOAD_USERS:
		return action.users; 
	default:
		return state;
	}
};

// groups
export const groups = (state={}, action) => {
	switch(action.type){
        
	case RECEIVE_LOAD_GROUPS:
		return action.groups;
            
	default:
		return state;
	}
};

export const selectedGroup  = (state="", action) => {
	switch(action.type){
	case SET_SELECTED_GROUP:
		return action.selectedGroup;
	default:
		return state;
	}
};

// filters
export const userFilter = (state = "", action) => {
	switch(action.type){
	case SET_USER_FILTER:
		return action.userFilter;
	default:
		return state;
	}
};

export const groupUserFilter = (state="", action) => {
	switch(action.type){
	case SET_GROUP_USER_FILTER:
		return action.groupUserFilter;
	default:
		return state;
	}
};
