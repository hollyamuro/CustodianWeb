"use strict";

import {
	RECEIVE_LOAD_GROUPS,
	SET_SELECTED_GROUP,
} from "../actions";

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