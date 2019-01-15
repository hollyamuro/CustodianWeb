import { SET_GROUP_FILTER, SET_ROLE_FILTER, SET_PRODUCT_FILTER } from "../actions";

export const groupFilter = (state="", action) => {
	switch(action.type){
	case SET_GROUP_FILTER:
		return action.groupFilter;
	default:
		return state;
	}
};

export const roleFilter = (state="", action) => {
	switch(action.type){
	case SET_ROLE_FILTER:
		return action.roleFilter;
	default:
		return state;
	}
};

export const productFilter = (state="", action) => {
	switch(action.type){
	case SET_PRODUCT_FILTER:
		return action.productFilter;
	default:
		return state;
	}
};