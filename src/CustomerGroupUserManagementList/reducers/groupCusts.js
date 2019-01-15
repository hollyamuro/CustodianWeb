"use strict";

import {
	RECEIVE_LOAD_GROUP_CUSTS
} from "../actions";

export const groupCusts = (state=[], action) => {
	switch(action.type){
	case RECEIVE_LOAD_GROUP_CUSTS:
		return action.groupCusts;
	default:
		return state;
	}
};
