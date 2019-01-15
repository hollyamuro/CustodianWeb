"use strict";

import { connect } from "react-redux";
import { removePermission } from "../actions";
import DeletePermissionList from "../components/DeletePermissionList";

const getFilteredOutPermissions = (permissions, filter) => {
	return (filter === "") ?
		permissions :
		permissions.filter((p) => {
			return (
				p.sys.includes(filter) ||
				p.sys_show_name.includes(filter) ||
				p.dir.includes(filter) ||
				p.dir_show_name.includes(filter) ||
				p.fun.includes(filter) ||
				p.fun_show_name.includes(filter) ||
				p.memo.includes(filter)
			);
		});
};


const getGroupPermissions = (allPermissions, groupPermissions) => {

	let pList = [];
	groupPermissions.map((gp) => {
		let p = (allPermissions.filter((p) => {
			return (
				gp.cgp_system_id === p.sys &&
				gp.cgp_directory_id === p.dir &&
				gp.cgp_function_id === p.fun
			);
		}));

		if (p.length !== 0) pList.push({ ...p[0], show_btn: gp.cgp_auth });
	});

	return pList;
};

const mapStateToProps = state => ({
	permissions: getFilteredOutPermissions(
		getGroupPermissions(state.permissions, state.groupPermissions),
		state.groupPermissionFilter) || [],
	selectedGroup: state.selectedGroup,
});

const mapDispatchToProps = dispatch => ({
	onDispatchRemove: (groupId, sys, dir, fun, permission) => {
		dispatch(removePermission(groupId, sys, dir, fun, permission));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletePermissionList);
