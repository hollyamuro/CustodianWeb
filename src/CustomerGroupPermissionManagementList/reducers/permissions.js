"use strict";

import {
	RECEIVE_LOAD_ALL_PERMISSIONS,    
} from "../actions";

export const permissions = (state=[], action) => {
	switch(action.type){
	case RECEIVE_LOAD_ALL_PERMISSIONS:
		return action.permissions;
	default:
		return state;
	}
};