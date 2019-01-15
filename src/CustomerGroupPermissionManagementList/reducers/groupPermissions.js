"use strict";

import {
	RECEIVE_LOAD_GROUP_PERMISSIONS,    
} from "../actions";

export const groupPermissions = (state=[], action) => {
	switch(action.type){
	case RECEIVE_LOAD_GROUP_PERMISSIONS:
		return action.groupPermissions;
	default:
		return state;
	}
};