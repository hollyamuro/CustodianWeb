"use strict";

import {
	RECEIVE_LOAD_CUSTS,
} from "../actions";

export const custs = (state=[], action) => {
	switch(action.type){
	case RECEIVE_LOAD_CUSTS:
		return action.custs;
            
	default:
		return state;
	}
};