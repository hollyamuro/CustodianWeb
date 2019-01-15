"use strict";

import axios from "axios";
import { Unauthorized } from "../../SinoComponent/SinoErrorHandler";
import { ActiveFilters, StatusFilters } from "../constants";

/**
 * action type & action creators
 */

//load customer list
export const REQUEST_LOAD_CUST_LIST = "REQUEST_LOAD_CUST_LIST";
export const RECEIVE_LOAD_CUST_LIST = "RECEIVE_LOAD_CUST_LIST";
export const LOAD_CUST_LIST = "LOAD_CUST_LIST";
export const requestLoadCustList = () => {
	return {
		type: REQUEST_LOAD_CUST_LIST,
		isLoading: true,
	};
};
export const receiveLoadCustList = (customers) => {
	return {
		type: RECEIVE_LOAD_CUST_LIST,
		isLoading: false,
		customers,
	};
};
export const loadCustList = () => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestLoadCustList());

			//do request
			const result =
				await axios.post(location.protocol + "//" + location.host + "/S001C001F001/custs/read", {});

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveLoadCustList(result.data.data));

			//clean up
			dispatch(setActiveFilter(ActiveFilters.SHOW_ALL));
			dispatch(setIdFilter(""));
			dispatch(setStatusFilter(StatusFilters.SHOW_ALL));
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

//import customer list
export const REQUEST_IMPORT_CUST_LIST = "REQUEST_IMPORT_CUST_LIST";
export const RECEIVE_IMPORT_CUST_LIST = "RECEIVE_IMPORT_CUST_LIST";
export const IMPORT_CUST_LIST = "IMPORT_CUST_LIST";
export const requestImportCustList = () => {
	return {
		type: REQUEST_IMPORT_CUST_LIST,
		isLoading: true,
	};
};
export const receiveImportCustList = () => {
	return {
		type: RECEIVE_IMPORT_CUST_LIST,
		isLoading: false,
	};
};
export const importCustList = () => {
	return async (dispatch) => {
		try {
			//start request
			dispatch(requestImportCustList());

			//do request
			const result =
				await axios.post(location.protocol + "//" + location.host + "/S001C001F001/custs/import", {});

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveImportCustList(result.data.data));

			//refresh
			dispatch(loadCustList());
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

//send invite mail
export const REQUEST_SEND_INVITE_MAIL = "REQUEST_SEND_INVITE_MAIL";
export const RECEIVE_SEND_INVITE_MAIL = "RECEIVE_SEND_INVITE_MAIL";
export const SEND_INVITE_MAIL = "IMPORT_CUST_LIST";
export const requestSendInviteMail = () => {
	return {
		type: REQUEST_SEND_INVITE_MAIL,
		isLoading: true,
	};
};
export const receiveSendInviteMail = () => {
	return {
		type: RECEIVE_SEND_INVITE_MAIL,
		isLoading: false,
	};
};
export const sendInviteMail = (account_no, sino_account) => {

	return async (dispatch) => {
		try {
			//start request
			dispatch(requestSendInviteMail());

			//do request
			let obj = {
				"data": {
					"account_no": account_no, "sino_account": sino_account
				},
			};
			const result = await axios.post(location.protocol + "//" + location.host + "/S001C001F001/custs/invite", obj);

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveSendInviteMail());

			//refresh
			dispatch(loadCustList());
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

//send password mail
export const REQUEST_SEND_PASSWORD_MAIL = "REQUEST_SEND_PASSWORD_MAIL";
export const RECEIVE_SEND_PASSWORD_MAIL = "RECEIVE_SEND_PASSWORD_MAIL";
export const SEND_PASSWORD_MAIL = "SEND_PASSWORD_MAIL";
export const requestSendPasswordMail = () => {
	return {
		type: REQUEST_SEND_PASSWORD_MAIL,
		isLoading: true,
	};
};
export const receiveSendPasswordMail = () => {
	return {
		type: RECEIVE_SEND_PASSWORD_MAIL,
		isLoading: false,
	};
};
export const sendPasswordMail = (account_no, email) => {
	return async (dispatch) => {
		try {
			// start request
			dispatch(requestSendInviteMail());

			// do request
			let obj = {
				"data": {
					"account": account_no, "useremail": email
				},
			};
			const result = await axios.post(location.protocol + "//" + location.host + "/S001C001F001/custs/reset_password", obj);

			//validate
			if (!result.data.code) throw new Unauthorized();
			if (result.data.code.type === "ERROR") throw Error(result.data.code.message);

			//end of request
			dispatch(receiveSendPasswordMail());

			//refresh
			dispatch(loadCustList());
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

//filters
export const SET_STATUS_FILTER = "SET_STATUS_FILTER";
export const setStatusFilter = (statusFilter) => {
	return {
		type: SET_STATUS_FILTER,
		statusFilter
	};
};

export const SET_ACTIVE_FILTER = "SET_ACTIVE_FILTER";
export const setActiveFilter = (activeFilter) => {
	return {
		type: SET_ACTIVE_FILTER,
		activeFilter
	};
};

export const SET_ID_FILTER = "SET_ID_FILTER";
export const setIdFilter = (idFilter) => {
	return {
		type: SET_ID_FILTER,
		idFilter
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

