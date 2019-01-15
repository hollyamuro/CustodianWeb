"use strict";

import {
	// REQUEST_LOAD_GROUPS,
	RECEIVE_LOAD_GROUPS,
	SET_UPDATE_GROUP_NAME,
	SET_UPDATE_GROUP_DESCRIPTION,
	SET_UPDATE_GROUP_ROLE,
	SET_UPDATE_GROUP_PRODUCT,
} from "../actions";

const groups = (state = [], action) => {
	switch(action.type){
	// case REQUEST_LOAD_GROUPS:
	//     return state;

	case RECEIVE_LOAD_GROUPS:
		return action.groups;

	case SET_UPDATE_GROUP_NAME:
		return state.map((g)=>{ return (g.cg_id === action.id)?({...g, cg_name: action.cg_name}):g; });

	case SET_UPDATE_GROUP_DESCRIPTION:
		return state.map((g)=>{ return (g.cg_id === action.id)?({...g, cg_description: action.cg_description}):g; });

	case SET_UPDATE_GROUP_ROLE:
		return state.map((g)=>{ return (g.cg_id === action.id)?({...g, cg_role: action.cg_role}):g; });

	case SET_UPDATE_GROUP_PRODUCT:
		return state.map((g)=>{ return (g.cg_id === action.id)?({...g, cg_product: action.cg_product}):g; });

	default:
		return state;
	}
};

export default groups;