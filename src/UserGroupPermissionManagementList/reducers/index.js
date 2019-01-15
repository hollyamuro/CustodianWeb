"use strict";

import { combineReducers } from "redux";
import {
	groupPermissions,
	groups,
	selectedGroup,
	permissions,
	permissionFilter,
	groupPermissionFilter
} from "./groupPermissions";
import { isLoading } from "./loadings";
import { isMsgShown, msg } from "./message";

export default combineReducers({
	groups,
	selectedGroup,
	permissions,
	groupPermissions,
	isLoading,
	isMsgShown,
	msg,
	permissionFilter,
	groupPermissionFilter
});
