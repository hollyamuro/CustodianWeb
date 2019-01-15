"use strict";

import React from "react";
import PropTypes from "prop-types";
import { AddPermissionButton } from "./PermissionButton";
import { PermissionCodes } from "../constants";

import "../style.css";

const AddPermissionItem = ({
	permission,
	onCreateBtnClick,
	onReadBtnClick,
	onUpdateBtnClick,
	onDeleteBtnClick,
	onExecuteBtnClick,
	onSuperviserBtnClick,
	onAllBtnClick,
}) => (
		<div className="permission-item-primary" >
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
				{(!permission.not_show_btn.includes("C")) ? (<AddPermissionButton title={"新增權限"} text={"新增"} onClick={onCreateBtnClick} />) : ""}
				{(!permission.not_show_btn.includes("R")) ? (<AddPermissionButton title={"新增權限"} text={"查詢"} onClick={onReadBtnClick} />) : ""}
				{(!permission.not_show_btn.includes("U")) ? (<AddPermissionButton title={"新增權限"} text={"修改"} onClick={onUpdateBtnClick} />) : ""}
				{(!permission.not_show_btn.includes("D")) ? (<AddPermissionButton title={"新增權限"} text={"刪除"} onClick={onDeleteBtnClick} />) : ""}
				{(!permission.not_show_btn.includes("E")) ? (<AddPermissionButton title={"新增權限"} text={"執行"} onClick={onExecuteBtnClick} />) : ""}
				{(!permission.not_show_btn.includes("S")) ? (<AddPermissionButton title={"新增權限"} text={"最高"} onClick={onSuperviserBtnClick} />) : ""}
				{(permission.not_show_btn.length === 0) ? (<AddPermissionButton title={"新增權限"} text={"全部"} onClick={onAllBtnClick} />) : ""}
				{
					(Object.keys(PermissionCodes).filter((p) => { return (p !== "ALL"); }).map((p) => {
						return permission.not_show_btn.includes(p);
					}).includes(false)) ? "" : <div className="permission-item-hint-primary">全部權限皆已開放</div>
				}
			</div>
		</div>
	);

AddPermissionItem.propTypes = {
	permission: PropTypes.shape({
		dir: PropTypes.string.isRequired,
		dir_show_name: PropTypes.string.isRequired,
		fun: PropTypes.string.isRequired,
		fun_show_name: PropTypes.string.isRequired,
		sys: PropTypes.string.isRequired,
		sys_show_name: PropTypes.string.isRequired,
		memo: PropTypes.string.isRequired,
		not_show_btn: PropTypes.arrayOf(
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

export default AddPermissionItem;