"use strict";

import axios from "axios";
import { Unauthorized } from "../../SinoComponent/SinoErrorHandler";
import { PermissionCodes } from "../constants";

/**
 * action type & action creators
 */

//load group list
export const REQUEST_LOAD_GROUPS = "REQUEST_LOAD_GROUPS";
export const RECEIVE_LOAD_GROUPS = "RECEIVE_LOAD_GROUPS";
export const LOAD_GROUPS = "LOAD_GROUPS";

export const requestLoadGroups = () => ({
	type: REQUEST_LOAD_GROUPS,
	isLoading: true,
});
export const receiveLoadGroups = (groups) => ({
	type: RECEIVE_LOAD_GROUPS,
	isLoading: false,
	groups,
});
export const loadGroups = () => {
	return async (dispatch)=>{
		try{
			//start request
			dispatch(requestLoadGroups());
            
			//do request
			const result = 
            await axios.post(location.protocol + "//" + location.host + "/S098C001F003/cust_groups/read", { data: {} } );
        
			//validate
			if(!result.data.code) throw new Unauthorized();
			if(result.data.code.type === "ERROR") throw Error(result.data.code.message);
          
			const groupList={};
			result.data.data.map(g=>{ groupList[g.cg_id] = g.cg_name; });
            
			//end of request
			dispatch(receiveLoadGroups(groupList));     
		}catch(err){
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
	}; 
};

//load all permission list
export const REQUEST_LOAD_ALL_PERMISSIONS = "REQUEST_LOAD_ALL_PERMISSIONS";
export const RECEIVE_LOAD_ALL_PERMISSIONS = "RECEIVE_LOAD_ALL_PERMISSIONS";
export const LOAD_ALL_PERMISSIONS = "LOAD_ALL_PERMISSIONS";

export const requestLoadAllPermissions = () => ({
	type: REQUEST_LOAD_ALL_PERMISSIONS,
	isLoading: true,
});
export const receiveLoadAllPermissions = (permissions) => ({
	type: RECEIVE_LOAD_ALL_PERMISSIONS,
	isLoading: false,
	permissions,
});
export const loadAllPermissions = () => {
	return async (dispatch)=>{
		try{
			//start request
			dispatch(requestLoadAllPermissions());
            
			//do request
			const result = await axios.post(location.protocol + "//" + location.host + "/helper/cust_system_permission_list", {});
        
			//validate
			if(!result.data.code) throw new Unauthorized();
			if(result.data.code.type === "ERROR") throw Error(result.data.code.message);
          
			//end of request
			dispatch(receiveLoadAllPermissions(result.data.data));
		}catch(err){
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
	}; 
};

//load permission list in group
export const REQUEST_LOAD_GROUP_PERMISSIONS = "REQUEST_LOAD_ALL_GROUP_PERMISSIONS";
export const RECEIVE_LOAD_GROUP_PERMISSIONS = "RECEIVE_LOAD_ALL_GROUP_PERMISSIONS";
export const LOAD_GROUP_PERMISSIONS = "LOAD_ALL_GROUP_PERMISSIONS";
export const requestLoadGroupPermissions = () => ({
	type: REQUEST_LOAD_GROUP_PERMISSIONS,
	isLoading: true,
});
export const receiveLoadGroupPermissions = (groupPermissions) => ({
	type: RECEIVE_LOAD_GROUP_PERMISSIONS,
	isLoading: false,
	groupPermissions,
});
export const loadGroupPermissions = (groupId) => {
	return async (dispatch)=>{
		try{
			//start request
			dispatch(requestLoadGroupPermissions());
            
			//do request
			const result = await axios.post(location.protocol + "//" + location.host + "/S098C001F003/custs_group_permissions/read", 
				{ "data": {"cust_group_id": groupId } });

			//validate
			if(!result.data.code) throw new Unauthorized();
			if(result.data.code.type === "ERROR") throw Error(result.data.code.message);
          
			//end of request
			dispatch(receiveLoadGroupPermissions(result.data.data));
		}catch(err){
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
export const setSelectedGroup = (selectedGroup) => ({
	type: SET_SELECTED_GROUP,
	selectedGroup,
});

//set permission filter
export const SET_PERMISSION_FILTER = "SET_PERMISSION_FILTER";
export const setPermissionFilter = (permissionFilter) => ({
	type: SET_PERMISSION_FILTER,
	permissionFilter,
});

//set group permission filter
export const SET_GROUP_PERMISSION_FILTER = "SET_GROUP_PERMISSION_FILTER";
export const setGroupPermissionFilter = (groupPermissionFilter) => ({
	type: SET_GROUP_PERMISSION_FILTER,
	groupPermissionFilter,
});

//refresh
export const REFRESH_GROUP = "REFRESH_GROUP";
export const refreshGroup = () => {
	return async (dispatch, getState)=>{
		try{
			await dispatch(loadGroups());
			await dispatch(loadAllPermissions());
			await dispatch(loadGroupPermissions(getState().selectedGroup));
			dispatch(setPermissionFilter(""));
			dispatch(setGroupPermissionFilter(""));
		}catch(err){
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
	};    
};

//add permission
export const REQUEST_ADD_PERMISSION = "REQUEST_ADD_PERMISSION";
export const RECEIVE_ADD_PERMISSION = "RECEIVE_ADD_PERMISSION";
export const ADD_PERMISSION = "ADD_PERMISSION";

export const requestAddPermission = () => ({
	type: REQUEST_ADD_PERMISSION,
	isLoading: true,
});
export const receiveAddPermission = () => ({
	type: RECEIVE_ADD_PERMISSION,
	isLoading: false,
});
export const AddPermission = (groupId, sys, dir, fun, permission="") => {
	return async (dispatch)=>{
		try{
			//start request
			dispatch(requestAddPermission());
            
			let data = {
				"cust_group_permission_group": groupId,
				"cust_group_permission_sys": sys,
				"cust_group_permission_dir": dir,
				"cust_group_permission_fun": fun,
				"cust_group_permission_auth": permission || Object.keys(PermissionCodes).filter((p)=>{ return (p!=="ALL"); }),
			};

			//do request
			const result = await axios.post(location.protocol + "//" + location.host + "/S098C001F003/custs_group_permissions/create", {"data":data});
        
			//validate
			if(!result.data.code) throw new Unauthorized();
			if(result.data.code.type === "ERROR") throw Error(result.data.code.message);
          
			//end of request
			dispatch(receiveAddPermission());
            
			//refresh
			dispatch(refreshGroup());

			//show message
			dispatch(showMessage({
				type: result.data.code.type,
				title: result.data.code.type,
				text: result.data.code.message,
			}));
		}catch(err){
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
	}; 
};

//remove permission
export const REQUEST_REMOVE_PERMISSION = "REQUEST_REMOVE_PERMISSION";
export const RECEIVE_REMOVE_PERMISSION = "RECEIVE_REMOVE_PERMISSION";
export const REMOVE_PERMISSION = "REMOVE_PERMISSION";

export const requestRemovePermission = () => ({
	type: REQUEST_REMOVE_PERMISSION,
	isLoading: true,
});
export const receiveRemovePermission = () => ({
	type: RECEIVE_REMOVE_PERMISSION,
	isLoading: false,
});
export const removePermission = (groupId, sys, dir, fun, permission="") => {
	return async (dispatch)=>{
		try{
			//start request
			dispatch(requestRemovePermission());
            
			let data = {
				"cust_group_permission_group": groupId,
				"cust_group_permission_sys": sys,
				"cust_group_permission_dir": dir,
				"cust_group_permission_fun": fun,
				"cust_group_permission_auth": permission,
			};

			//do request
			const result = await axios.post(location.protocol + "//" + location.host + "/S098C001F003/custs_group_permissions/delete", {"data":data});
        
			//validate
			if(!result.data.code) throw new Unauthorized();
			if(result.data.code.type === "ERROR") throw Error(result.data.code.message);
          
			//end of request
			dispatch(receiveRemovePermission([]));
            
			//refresh
			dispatch(refreshGroup());

			//show message
			dispatch(showMessage({
				type: result.data.code.type,
				title: result.data.code.type,
				text: result.data.code.message,
			}));
		}catch(err){
			dispatch(showMessage({
				type: "ERROR",
				title: "ERROR",
				text: err.message,
			}));
			dispatch(stopLoading());
		}
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

