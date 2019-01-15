"use strict";

import { combineReducers } from "redux";
import { groups, selectedGroup } from "./groups";
import { groupCusts } from "./groupCusts";
import { custs } from "./custs";
import { custFilter, groupCustFilter } from "./filter";
import { isLoading } from "./loadings";
import { isMsgShown, msg } from "./message";

export default combineReducers({
	groups,
	selectedGroup,
	groupCusts,
	custs,
	custFilter,
	groupCustFilter,
	isLoading,
	isMsgShown,
	msg,
});
