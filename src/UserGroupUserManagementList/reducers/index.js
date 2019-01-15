"use strict";

import { combineReducers } from "redux";
import { 
	groupUsers,
	users,
	groups,
	selectedGroup,
	userFilter,
	groupUserFilter,
} from "./groupCusts";
import { isLoading } from "./loadings";
import { isMsgShown, msg } from "./message";

export default combineReducers({
	groupUsers,
	users,
	groups,
	selectedGroup,
	userFilter,
	groupUserFilter,
	isLoading,
	isMsgShown,
	msg,
});
