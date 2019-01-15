"use strict";

import { connect } from "react-redux";
import { AddPermission } from "../actions";
import AddPermissionList from "../components/AddPermissionList";

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

const getCanAddPermissions = (allPermissions, groupPermissions) => {
	return (
		allPermissions.map(
			(p) => {
				let existedPermission = groupPermissions.filter((gp) => {
					return (
						gp.gp_system_id === p.sys &&
						gp.gp_directory_id === p.dir &&
						gp.gp_function_id === p.fun
					);
				});

				return {
					...p,
					not_show_btn: (existedPermission.length === 0) ? [] : existedPermission[0].gp_auth,
				};
			})
	);
};

const mapStateToProps = state => ({
	permissions: getFilteredOutPermissions(
		getCanAddPermissions(state.permissions, state.groupPermissions),
		state.permissionFilter
	) || [],
	selectedGroup: state.selectedGroup,
});

const mapDispatchToProps = dispatch => ({
	onDispatchAdd: (groupId, sys, dir, fun, permission) => {
		dispatch(AddPermission(groupId, sys, dir, fun, permission));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPermissionList);
