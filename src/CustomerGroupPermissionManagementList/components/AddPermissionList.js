"use strict";

import React from "react";
import PropTypes from "prop-types";
import AddPermissionItem from "./AddPermissionItem";
import PermissionFilter from "../containers/PermissionFilter";

import "../style.css";

const AddPermissionList = ({
	permissions,
	selectedGroup,
	onDispatchAdd,
}) => {

	return (selectedGroup === "") ? "" : (
		<div className="permission-list-primary">
			<div className="row permission-list-header">
				<div className="col ">
					<small className="form-text text-muted">未加入群組權限</small>
				</div>
				<div className="col-md-3">
					<PermissionFilter />
				</div>
			</div>
			{permissions.map((c) => (
				<AddPermissionItem permission={c}
					onCreateBtnClick={() => { onDispatchAdd(selectedGroup, c.sys, c.dir, c.fun, "C"); }}
					onReadBtnClick={() => { onDispatchAdd(selectedGroup, c.sys, c.dir, c.fun, "R"); }}
					onUpdateBtnClick={() => { onDispatchAdd(selectedGroup, c.sys, c.dir, c.fun, "U"); }}
					onDeleteBtnClick={() => { onDispatchAdd(selectedGroup, c.sys, c.dir, c.fun, "D"); }}
					onExecuteBtnClick={() => { onDispatchAdd(selectedGroup, c.sys, c.dir, c.fun, "E"); }}
					onSuperviserBtnClick={() => { onDispatchAdd(selectedGroup, c.sys, c.dir, c.fun, "S"); }}
					onAllBtnClick={() => { onDispatchAdd(selectedGroup, c.sys, c.dir, c.fun, ""); }}
				/>
			))}
			{((permissions.length === 0) ? <div className="alert alert-danger col-12" role="alert">查無資料</div> : "")}
		</div>
	);
};

AddPermissionList.propTypes = {
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
	onDispatchAdd: PropTypes.func.isRequired,
};

export default AddPermissionList;