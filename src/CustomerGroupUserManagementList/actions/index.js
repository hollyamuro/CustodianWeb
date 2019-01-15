"use strict";

/**
 * action type & action creators
 */
import axios from "axios";
import { Unauthorized } from "../../SinoComponent/SinoErrorHandler";

//load group list
export const REQUEST_LOAD_GROUPS = "REQUEST_LOAD_GROUPS";
export const RECEIVE_LOAD_GROUPS = "RECEIVE_LOAD_GROUPS";
export const LOAD_GROUPS = "LOAD_GROUPS";

export const requestLoadGroups = () => {
	return {
		type: REQUEST_LOAD_GROUPS,
		isLoading: true,
	};
};
export const receiveLoadGroups = (groups) => {
	return {
		type: RECEIVE_LOAD_GROUPS,
		isLoading: false,
		groups,
	};
};
export const loadGroups = () => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestLoadGroups());

			//do request
			const result =
				await axios.post(location.protocol + "//" + location.host + "/S098C001F002/cust_groups/read", { data: {} });

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			const groupList = {};
			result.data.data.map(g => { groupList[g.cg_id] = g.cg_name; });

			//end of request
			dispatch(receiveLoadGroups(groupList));
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

//load group user list
export const REQUEST_LOAD_GROUP_CUSTS = "REQUEST_LOAD_GROUP_CUSTS";
export const RECEIVE_LOAD_GROUP_CUSTS = "RECEIVE_LOAD_GROUP_CUSTS";
export const LOAD_GROUP_CUSTS = "LOAD_GROUP_CUSTS";

export const requestLoadGroupCusts = () => {
	return {
		type: REQUEST_LOAD_GROUP_CUSTS,
		isLoading: true,
	};
};
export const receiveLoadGroupCusts = (groupCusts) => {
	return {
		type: RECEIVE_LOAD_GROUP_CUSTS,
		isLoading: false,
		groupCusts,
	};
};
export const loadGroupCusts = (groupId) => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestLoadGroupCusts());

			// do request
			const custsInGroup =
				await axios.post(
					location.protocol + "//" + location.host + "/S098C001F002/cust_group_users/read", { data: { "cust_group_id": groupId } }
				);

			//validate
			if (!custsInGroup.data.code) throw new Unauthorized();
			if (custsInGroup.data.code.type === "ERROR") throw Error(custsInGroup.data.code.message);

			//end of request
			dispatch(receiveLoadGroupCusts(custsInGroup.data.data));
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

//load user list
export const REQUEST_LOAD_CUSTS = "REQUEST_LOAD_CUSTS";
export const RECEIVE_LOAD_CUSTS = "RECEIVE_LOAD_CUSTS";
export const LOAD_CUSTS = "LOAD_CUSTS";

export const requestLoadCusts = () => {
	return {
		type: REQUEST_LOAD_CUSTS,
		isLoading: true,
	};
};
export const receiveLoadCusts = (custs) => {
	return {
		type: RECEIVE_LOAD_CUSTS,
		isLoading: false,
		custs,
	};
};
export const loadCusts = () => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestLoadCusts());

			// do request
			const custsInGroup =
				await axios.post(
					location.protocol + "//" + location.host + "/S098C001F002/custs/read", { data: {} });

			//validate
			if (!custsInGroup.data.code) throw new Unauthorized();
			if (custsInGroup.data.code.type === "ERROR") throw Error(custsInGroup.data.code.message);

			//end of request
			dispatch(receiveLoadCusts(custsInGroup.data.data));
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

//set selected group
export const SET_SELECTED_GROUP = "SET_SELECTED_GROUP";
export const setSelectedGroup = (selectedGroup) => {
	return {
		type: SET_SELECTED_GROUP,
		selectedGroup,
	};
};

//refresh screen
export const REFRESH_GROUP = "REFRESH_GROUP";
export const refreshGroup = () => {
	return async (dispatch, getState) => {
		try {
			await dispatch(loadGroups());
			await dispatch(loadGroupCusts(getState().selectedGroup));
			await dispatch(loadCusts());
			dispatch(setCustFilter(""));
			dispatch(setGroupCustFilter(""));
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

//add user to group
export const REQUEST_ADD_CUSTS_TO_GROUP = "REQUEST_ADD_CUSTS_TO_GROUP";
export const RECEIVE_ADD_CUSTS_TO_GROUP = "RECEIVE_ADD_CUSTS_TO_GROUP";
export const ADD_CUSTS_TO_GROUP = "ADD_CUSTS_TO_GROUP";

export const requestAddCustToGroup = () => {
	return {
		type: REQUEST_ADD_CUSTS_TO_GROUP,
		isLoading: true,
	};
};
export const receiveAddCustToGroup = () => {
	return {
		type: RECEIVE_ADD_CUSTS_TO_GROUP,
		isLoading: false
	};
};
export const addCustToGroup = (selectedGroup, account_no, sino_account) => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestAddCustToGroup());

			let data = {
				"cust_group_id": selectedGroup,
				"cust_account_no": account_no,
				"cust_sino_account": sino_account,
			};

			// do request
			const result =
				await axios.post(location.protocol + "//" + location.host + "/S098C001F002/cust_group_users/create", { "data": data });

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveAddCustToGroup());

			//refresh 
			dispatch(refreshGroup());

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

//delete user from group
export const REQUEST_DELETE_CUSTS_TO_GROUP = "REQUEST_DELETE_CUSTS_TO_GROUP";
export const RECEIVE_DELETE_CUSTS_TO_GROUP = "RECEIVE_DELETE_CUSTS_TO_GROUP";
export const DELETE_CUSTS_TO_GROUP = "DELETE_CUSTS_TO_GROUP";

export const requestDeleteCustToGroup = () => {
	return {
		type: REQUEST_DELETE_CUSTS_TO_GROUP,
		isLoading: true,
	};
};
export const receiveDeleteCustToGroup = () => {
	return {
		type: RECEIVE_DELETE_CUSTS_TO_GROUP,
		isLoading: false,
	};
};
export const deleteCustToGroup = (selectedGroup, account_no, sino_account) => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestDeleteCustToGroup());

			let data = {
				"cust_group_id": selectedGroup,
				"cust_account_no": account_no,
				"cust_sino_account": sino_account,
			};

			// do request
			const result =
				await axios.post(location.protocol + "//" + location.host + "/S098C001F002/cust_group_users/delete", { "data": data });

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveDeleteCustToGroup());

			//refresh 
			dispatch(refreshGroup());

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

//set custFilter
export const SET_CUST_FILTER = "SET_CUST_FILTER";
export const setCustFilter = (custFilter) => {
	return {
		type: SET_CUST_FILTER,
		custFilter,
	};
};

//set groupCustFilter
export const SET_GROUP_CUST_FILTER = "SET_GROUP_CUST_FILTER";
export const setGroupCustFilter = (groupCustFilter) => {
	return {
		type: SET_GROUP_CUST_FILTER,
		groupCustFilter,
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

