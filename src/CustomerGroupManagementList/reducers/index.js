"use strict";

import { combineReducers } from "redux";
import createdGroup from "./createdGroup";
import groups from "./groups";
import { isLoading } from "./loadings";
import { groupFilter, roleFilter, productFilter } from "./filters";
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
