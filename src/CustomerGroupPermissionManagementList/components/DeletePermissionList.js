"use strict";

import React from "react";
import PropTypes from "prop-types";
import DeletePermissionItem from "./DeletePermissionItem";
import GroupPermissionFilter from "../containers/GroupPermissionFilter";

import "../style.css";

const DeletePermissionList = ({
	permissions,
	selectedGroup,
	onDispatchRemove,
}) => {

	return (selectedGroup === "") ? "" : (
		<div className="permission-list-danger">
			<div className="row permission-list-header">
				<div className="col ">
					<small className="form-text text-muted">已加入群組權限</small>
				</div>
				<div className="col-md-3">
					<GroupPermissionFilter />
				</div>
			</div>
			{permissions.map((c) => (
				<DeletePermissionItem permission={c}
					onCreateBtnClick={() => { onDispatchRemove(selectedGroup, c.sys, c.dir, c.fun, "C"); }}
					onReadBtnClick={() => { onDispatchRemove(selectedGroup, c.sys, c.dir, c.fun, "R"); }}
					onUpdateBtnClick={() => { onDispatchRemove(selectedGroup, c.sys, c.dir, c.fun, "U"); }}
					onDeleteBtnClick={() => { onDispatchRemove(selectedGroup, c.sys, c.dir, c.fun, "D"); }}
					onExecuteBtnClick={() => { onDispatchRemove(selectedGroup, c.sys, c.dir, c.fun, "E"); }}
					onSuperviserBtnClick={() => { onDispatchRemove(selectedGroup, c.sys, c.dir, c.fun, "S"); }}
					onAllBtnClick={() => { onDispatchRemove(selectedGroup, c.sys, c.dir, c.fun, ""); }}
				/>
			))}
			{((permissions.length === 0) ? <div className="alert alert-danger col-12" role="alert">查無資料</div> : "")}
		</div>
	);
};

DeletePermissionList.propTypes = {
	permissions: PropTypes.arrayOf(
		PropTypes.shape({
			dir: PropTypes.string.isRequired,
			dir_show_name: PropTypes.string.isRequired,
			fun: PropTypes.string.isRequired,
			fun_show_name: PropTypes.string.isRequired,
			sys: PropTypes.string.isRequired,
			sys_show_name: PropTypes.string.isRequired,
			memo: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
	onDispatchRemove: PropTypes.func.isRequired,
};

export default DeletePermissionList;