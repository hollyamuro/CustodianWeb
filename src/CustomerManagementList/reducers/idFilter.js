"use strict";

import {
	SET_ID_FILTER,
} from "../actions";


const idFilter = (state = "", action) => {
	switch (action.type) {
	case SET_ID_FILTER:
		return action.idFilter;
	default:
		return state;
	}
};

export default idFilter;
