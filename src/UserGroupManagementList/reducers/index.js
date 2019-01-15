"use strict";

import { combineReducers } from "redux";
import { createdGroup, groups, groupFilter, roleFilter, productFilter } from "./groups";
import { isLoading } from "./loadings";
import { isMsgShown, msg } from "./message";

export default combineReducers({
	createdGroup,
	groups,
	groupFilter,
	roleFilter,
	productFilter,
	isLoading,
	isMsgShown,
	msg,
});
