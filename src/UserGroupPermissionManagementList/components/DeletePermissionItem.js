"use strict";

import React from "react";
import PropTypes from "prop-types";
import { DeletePermissionButton } from "./PermissionButton";

import "../style.css";

const DeletePermissionItem = ({
	permission,
	onCreateBtnClick,
	onReadBtnClick,
	onUpdateBtnClick,
	onDeleteBtnClick,
	onExecuteBtnClick,
	onSuperviserBtnClick,
	onAllBtnClick,
}) => (
		<div className="permission-item-danger" >
			<div className="item-text-wrapper" >
				<small className="form-text text-muted">
					{permission.sys + permission.dir + permission.fun}
				</small>
				<span>
					{
						permission.sys_show_name + " / " +
						permission.dir_show_name + " / " +
						permission.fun_show_name +
						((permission.memo !== "") ? ("(" + permission.memo + ")") : "")
					}
				</span>
			</div>
			<div className="item-button-wrapper">
				{(permission.show_btn.includes("C")) ? (<DeletePermissionButton title={"刪除權限"} text={"新增"} onClick={onCreateBtnClick} />) : ""}
				{(permission.show_btn.includes("R")) ? (<DeletePermissionButton title={"刪除權限"} text={"查詢"} onClick={onReadBtnClick} />) : ""}
				{(permission.show_btn.includes("U")) ? (<DeletePermissionButton title={"刪除權限"} text={"修改"} onClick={onUpdateBtnClick} />) : ""}
				{(permission.show_btn.includes("D")) ? (<DeletePermissionButton title={"刪除權限"} text={"刪除"} onClick={onDeleteBtnClick} />) : ""}
				{(permission.show_btn.includes("E")) ? (<DeletePermissionButton title={"刪除權限"} text={"執行"} onClick={onExecuteBtnClick} />) : ""}
				{(permission.show_btn.includes("S")) ? (<DeletePermissionButton title={"刪除權限"} text={"最高"} onClick={onSuperviserBtnClick} />) : ""}
				{(permission.show_btn.length > 0) ? (<DeletePermissionButton title={"刪除權限"} text={"全部"} onClick={onAllBtnClick} />) : ""}

			</div>
		</div>
	);

DeletePermissionItem.propTypes = {
	permission: PropTypes.shape({
		dir: PropTypes.string.isRequired,
		dir_show_name: PropTypes.string.isRequired,
		fun: PropTypes.string.isRequired,
		fun_show_name: PropTypes.string.isRequired,
		sys: PropTypes.string.isRequired,
		sys_show_name: PropTypes.string.isRequired,
		memo: PropTypes.string.isRequired,
		show_btn: PropTypes.arrayOf(
			PropTypes.string.isRequired,
		).isRequired,
	}).isRequired,
	onCreateBtnClick: PropTypes.func.isRequired,
	onReadBtnClick: PropTypes.func.isRequired,
	onUpdateBtnClick: PropTypes.func.isRequired,
	onDeleteBtnClick: PropTypes.func.isRequired,
	onExecuteBtnClick: PropTypes.func.isRequired,
	onSuperviserBtnClick: PropTypes.func.isRequired,
	onAllBtnClick: PropTypes.func.isRequired,
};

export default DeletePermissionItem;