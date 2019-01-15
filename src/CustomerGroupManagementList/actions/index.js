"use strict";

/**
 * action type & action creators
 */
import axios from "axios";
import { Unauthorized } from "../../SinoComponent/SinoErrorHandler";
import { RoleFilters, ProductFilters } from "../constants";

//load group list
export const REQUEST_LOAD_GROUPS = "REQUEST_LOAD_GROUPS";
export const RECEIVE_LOAD_GROUPS = "RECEIVE_LOAD_GROUPS";
export const LOAD_GROUPS = "LOAD_GROUPS";

export const requestloadGroups = () => {
	return {
		type: REQUEST_LOAD_GROUPS,
		isLoading: true,
	};
};

export const receiveloadGroups = (groups) => {
	return {
		type: RECEIVE_LOAD_GROUPS,
		isLoading: false,
		groups: groups,
	};
};

export const loadGroups = () => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestloadGroups());

			//do request
			const result =
				await axios.post(
					location.protocol + "//" + location.host + "/S098C001F001/cust_groups/read", { data: {} }
				);

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveloadGroups(result.data.data));

			//clean up
			dispatch(setGroupFilter(""));
			dispatch(setRoleFilter(RoleFilters.SHOW_ALL));
			dispatch(setProductFilter(ProductFilters.SHOW_ALL));
		} catch (err) {
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
	};
};



//create group
export const REQUEST_CREATE_GROUP = "REQUEST_CREATE_GROUP";
export const RECEIVE_CREATE_GROUP = "RECEIVE_CREATE_GROUP";
export const CREATE_GROUP = "CREATE_GROUP";

export const requestCreateGroup = () => {
	return {
		type: REQUEST_CREATE_GROUP,
		isLoading: true,
	};
};

export const receiveCreateGroup = () => {
	return {
		type: RECEIVE_CREATE_GROUP,
		isLoading: false,
	};
};

export const createGroup = () => {
	return async (dispatch, getState) => {
		try {
			//start request
			dispatch(requestCreateGroup());

			// do request
			const result = await axios.post(
				location.protocol + "//" + location.host + "/S098C001F001/cust_groups/create",
				{ data: getState().createdGroup }
			);

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveCreateGroup());

			//clean up
			dispatch(setCreateGroupInit());

			//refresh
			dispatch(loadGroups());

			//show message
			dispatch(showMessage({
				type: result.data.code.type,
				title: result.data.code.type,
				text: result.data.code.message,
			}));
		} catch (err) {
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
	};
};



//set create group
export const SET_CREATE_GROUP_NAME = "SET_CREATE_GROUP_NAME";
export const SET_CREATE_GROUP_DESCRIPTION = "SET_CREATE_GROUP_DESCRIPTION";
export const SET_CREATE_GROUP_ROLE = "SET_CREATE_GROUP_ROLE";
export const SET_CREATE_GROUP_PRODUCT = "SET_CREATE_GROUP_PRODUCT";
export const SET_CREATE_GROUP_INIT = "SET_CREATE_GROUP_INIT";

export const setCreateGroupName = (cg_name) => {
	return {
		type: SET_CREATE_GROUP_NAME,
		cg_name,
	};
};

export const setCreateGroupDescription = (cg_description) => {
	return {
		type: SET_CREATE_GROUP_DESCRIPTION,
		cg_description,
	};
};

export const setCreateGroupRole = (cg_role) => {
	return {
		type: SET_CREATE_GROUP_ROLE,
		cg_role,
	};
};

export const setCreateGroupProduct = (cg_product) => {
	return {
		type: SET_CREATE_GROUP_PRODUCT,
		cg_product,
	};
};

export const setCreateGroupInit = () => {
	return async (dispatch) => {
		try {
			dispatch(setCreateGroupName(""));
			dispatch(setCreateGroupDescription(""));
			dispatch(setCreateGroupRole(""));
			dispatch(setCreateGroupProduct(""));
		} catch (err) {
			//[TODO] handle error here?
		}
	};
};



// set update group
export const REQUEST_UPDATE_GROUP = "REQUEST_UPDATE_GROUP";
export const RECEIVE_UPDATE_GROUP = "RECEIVE_UPDATE_GROUP";
export const UPDATE_GROUP = "UPDATE_GROUP";

export const requestUpdateGroup = () => {
	return {
		type: REQUEST_UPDATE_GROUP,
		isLoading: true,
	};
};

export const receiveUpdateGroup = () => {
	return {
		type: RECEIVE_UPDATE_GROUP,
		isLoading: false,
	};
};

export const updateGroup = (id) => {
	return async (dispatch, getState) => {
		try {
			//start request
			dispatch(requestUpdateGroup());

			// do request
			const result = await axios.post(
				location.protocol + "//" + location.host + "/S098C001F001/cust_groups/update",
				{ data: getState().groups.filter((g) => { return (g.cg_id === id); })[0] }
			);

			// validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveUpdateGroup());

			//refresh
			dispatch(loadGroups());

			//show message
			dispatch(showMessage({
				type: result.data.code.type,
				title: result.data.code.type,
				text: result.data.code.message,
			}));
		} catch (err) {
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
	};
};



//set update group
export const SET_UPDATE_GROUP_NAME = "SET_UPDATE_GROUP_NAME";
export const SET_UPDATE_GROUP_DESCRIPTION = "SET_UPDATE_GROUP_DESCRIPTION";
export const SET_UPDATE_GROUP_ROLE = "SET_UPDATE_GROUP_ROLE";
export const SET_UPDATE_GROUP_PRODUCT = "SET_UPDATE_GROUP_PRODUCT";

export const setUpdateGroupName = (id, cg_name) => {
	return {
		type: SET_UPDATE_GROUP_NAME,
		id,
		cg_name,
	};
};

export const setUpdateGroupDescription = (id, cg_description) => {
	return {
		type: SET_UPDATE_GROUP_DESCRIPTION,
		id,
		cg_description
	};
};

export const setUpdateGroupRole = (id, cg_role) => {
	return {
		type: SET_UPDATE_GROUP_ROLE,
		id,
		cg_role
	};
};

export const setUpdateGroupProduct = (id, cg_product) => {
	return {
		type: SET_UPDATE_GROUP_PRODUCT,
		id,
		cg_product
	};
};



//delete group
export const REQUEST_DELETE_GROUP = "REQUEST_DELETE_GROUP";
export const RECEIVE_DELETE_GROUP = "RECEIVE_DELETE_GROUP";
export const DELETE_GROUP = "DELETE_GROUP";

export const requestDeleteGroup = () => {
	return {
		type: REQUEST_DELETE_GROUP,
		isLoading: true,
	};
};

export const receiveDeleteGroup = () => {
	return {
		type: RECEIVE_DELETE_GROUP,
		isLoading: false,
	};
};

export const deleteGroup = (id) => {
	return async (dispatch, getState) => {
		try {
			//start request
			dispatch(requestDeleteGroup());

			// do request
			const result =
				await axios.post(
					location.protocol + "//" + location.host + "/S098C001F001/cust_groups/delete",
					{ data: getState().groups.filter((g) => { return (g.cg_id === id); })[0] }
				);

			// validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveDeleteGroup());

			//refresh
			dispatch(loadGroups());

			//show message
			dispatch(showMessage({
				type: result.data.code.type,
				title: result.data.code.type,
				text: result.data.code.message,
			}));
		} catch (err) {
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
	};
};

//group filter
export const SET_GROUP_FILTER = "SET_GROUP_FILTER";
export const setGroupFilter = (groupFilter) => {
	return {
		type: SET_GROUP_FILTER,
		groupFilter
	};
};

//role filter 
export const SET_ROLE_FILTER = "SET_ROLE_FILTER";
export const setRoleFilter = (roleFilter) => {
	return {
		type: SET_ROLE_FILTER,
		roleFilter
	};
};

//product filter
export const SET_PRODUCT_FILTER = "SET_PRODUCT_FILTER";
export const setProductFilter = (productFilter) => {
	return {
		type: SET_PRODUCT_FILTER,
		productFilter
	};
};

//show message alert
export const SHOW_MESSAGE = "SHOW_MESSAGE";
export const HIDE_MESSAGE = "HIDE_MESSAGE";

export const showMessage = (msg) => ({
	type: SHOW_MESSAGE,
	isMsgShown: true,
	msg,
});
export const hideMessage = () => ({
	type: HIDE_MESSAGE,
	isMsgShown: false,
});

//stop loading
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export const startLoading = () => ({
	type: START_LOADING,
	isLoading: true,
});
export const stopLoading = () => ({
	type: STOP_LOADING,
	isLoading: false,
});

