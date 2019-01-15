"use strict";

import { combineReducers } from "redux";
import { groups, selectedGroup } from "./groups";
import { permissions } from "./permissions";
import { groupPermissions } from "./groupPermissions";
import { isLoading } from "./loadings";
import { isMsgShown, msg} from "./message";
import { permissionFilter, groupPermissionFilter } from "./filters";

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
