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
				await axios.post(location.protocol + "//" + location.host + "/S099C001F003/groups/read", { data: {} });

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			const groupList = {};
			result.data.data.map(g => { groupList[g.g_id] = g.g_name; });

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
export const REQUEST_LOAD_GROUP_USERS = "REQUEST_LOAD_GROUP_USERS";
export const RECEIVE_LOAD_GROUP_USERS = "RECEIVE_LOAD_GROUP_USERS";
export const LOAD_GROUP_USERS = "LOAD_GROUP_USERS";

export const requestLoadGroupUsers = () => {
	return {
		type: REQUEST_LOAD_GROUP_USERS,
		isLoading: true,
	};
};
export const receiveLoadGroupUsers = (groupUsers) => {
	return {
		type: RECEIVE_LOAD_GROUP_USERS,
		isLoading: false,
		groupUsers,
	};
};
export const loadGroupUsers = (groupId) => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestLoadGroupUsers());

			// do request
			const usersInGroup =
				await axios.post(
					location.protocol + "//" + location.host + "/S099C001F003/read", { data: { "group_id": groupId } }
				);

			//validate
			if (!usersInGroup.data.code) throw new Unauthorized();
			if (usersInGroup.data.code.type === "ERROR") throw Error(usersInGroup.data.code.message);

			//end of request
			dispatch(receiveLoadGroupUsers(usersInGroup.data.data));
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
export const REQUEST_LOAD_USERS = "REQUEST_LOAD_USERS";
export const RECEIVE_LOAD_USERS = "RECEIVE_LOAD_USERS";
export const LOAD_USERS = "LOAD_USERS";

export const requestLoadUsers = () => {
	return {
		type: REQUEST_LOAD_USERS,
		isLoading: true,
	};
};
export const receiveLoadUsers = (users) => {
	return {
		type: RECEIVE_LOAD_USERS,
		isLoading: false,
		users,
	};
};
export const loadUsers = () => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestLoadUsers());

			// do request
			const users =
				await axios.post(
					location.protocol + "//" + location.host + "/S099C001F003/users/read", { data: {} });

			//validate
			if (!users.data.code) throw new Unauthorized();
			if (users.data.code.type === "ERROR") throw Error(users.data.code.message);

			//end of request
			dispatch(receiveLoadUsers(users.data.data));
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
			await dispatch(loadGroupUsers(getState().selectedGroup));
			await dispatch(loadUsers());
			dispatch(setUserFilter(""));
			dispatch(setGroupUserFilter(""));
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
export const REQUEST_ADD_USER_TO_GROUP = "REQUEST_ADD_USER_TO_GROUP";
export const RECEIVE_ADD_USER_TO_GROUP = "RECEIVE_ADD_USER_TO_GROUP";
export const ADD_USER_TO_GROUP = "ADD_USER_TO_GROUP";

export const requestAddUserToGroup = () => {
	return {
		type: REQUEST_ADD_USER_TO_GROUP,
		isLoading: true,
	};
};
export const receiveAddUserToGroup = () => {
	return {
		type: RECEIVE_ADD_USER_TO_GROUP,
		isLoading: false
	};
};
export const addUserToGroup = (selectedGroup, user_id, ) => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestAddUserToGroup());

			let data = {
				"group_id": selectedGroup,
				"user_id": user_id,
			};

			// do request
			const result =
				await axios.post(location.protocol + "//" + location.host + "/S099C001F003/create", { "data": data });

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveAddUserToGroup());

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
export const REQUEST_DELETE_USER_TO_GROUP = "REQUEST_DELETE_USER_TO_GROUP";
export const RECEIVE_DELETE_USER_TO_GROUP = "RECEIVE_DELETE_USER_TO_GROUP";
export const DELETE_USER_TO_GROUP = "DELETE_USER_TO_GROUP";

export const requestDeleteUserToGroup = () => {
	return {
		type: REQUEST_DELETE_USER_TO_GROUP,
		isLoading: true,
	};
};
export const receiveDeleteUserToGroup = () => {
	return {
		type: RECEIVE_DELETE_USER_TO_GROUP,
		isLoading: false,
	};
};
export const deleteUserToGroup = (selectedGroup, user_id) => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestDeleteUserToGroup());

			let data = {
				"group_id": selectedGroup,
				"user_id": user_id,
			};

			// do request
			const result =
				await axios.post(location.protocol + "//" + location.host + "/S099C001F003/delete", { "data": data });

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveDeleteUserToGroup());

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
export const SET_USER_FILTER = "SET_USER_FILTER";
export const setUserFilter = (userFilter) => {
	return {
		type: SET_USER_FILTER,
		userFilter,
	};
};

//set groupCustFilter
export const SET_GROUP_USER_FILTER = "SET_GROUP_USER_FILTER";
export const setGroupUserFilter = (groupUserFilter) => {
	return {
		type: SET_GROUP_USER_FILTER,
		groupUserFilter,
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

