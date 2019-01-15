"use strict";

import {
	// groups
	RECEIVE_LOAD_GROUPS,
	SET_UPDATE_GROUP_NAME,
	SET_UPDATE_GROUP_DESCRIPTION,
	SET_UPDATE_GROUP_ROLE,
	SET_UPDATE_GROUP_PRODUCT,
	// create group
	SET_CREATE_GROUP_NAME,
	SET_CREATE_GROUP_DESCRIPTION,
	SET_CREATE_GROUP_ROLE,
	SET_CREATE_GROUP_PRODUCT,
	// filter
	SET_GROUP_FILTER,
	SET_ROLE_FILTER,
	SET_PRODUCT_FILTER
} from "../actions";

export const createdGroup = (
	state = {
		g_id: "",
		g_name: "",
		g_description: "",
		g_role: "",
		g_product: "",
	},
	action) => {

	switch (action.type) {
	case SET_CREATE_GROUP_NAME:
		return { ...state, g_name: action.g_name };

	case SET_CREATE_GROUP_DESCRIPTION:
		return { ...state, g_description: action.g_description };

	case SET_CREATE_GROUP_ROLE:
		return { ...state, g_role: action.g_role };

	case SET_CREATE_GROUP_PRODUCT:
		return { ...state, g_product: action.g_product };

	default:
		return state;
	}
};

export const groups = (state = [], action) => {
	switch (action.type) {

	case RECEIVE_LOAD_GROUPS:
		return action.groups;

	case SET_UPDATE_GROUP_NAME:
		return state.map((g) => { return (g.g_id === action.id) ? ({ ...g, g_name: action.g_name }) : g; });

	case SET_UPDATE_GROUP_DESCRIPTION:
		return state.map((g) => { return (g.g_id === action.id) ? ({ ...g, g_description: action.g_description }) : g; });

	case SET_UPDATE_GROUP_ROLE:
		return state.map((g) => { return (g.g_id === action.id) ? ({ ...g, g_role: action.g_role }) : g; });

	case SET_UPDATE_GROUP_PRODUCT:
		return state.map((g) => { return (g.g_id === action.id) ? ({ ...g, g_product: action.g_product }) : g; });

	default:
		return state;
	}
};

export const groupFilter = (state = "", action) => {
	switch (action.type) {
	case SET_GROUP_FILTER:
		return action.groupFilter;
	default:
		return state;
	}
};

export const roleFilter = (state = "", action) => {
	switch (action.type) {
	case SET_ROLE_FILTER:
		return action.roleFilter;
	default:
		return state;
	}
};

export const productFilter = (state = "", action) => {
	switch (action.type) {
	case SET_PRODUCT_FILTER:
		return action.productFilter;
	default:
		return state;
	}
};