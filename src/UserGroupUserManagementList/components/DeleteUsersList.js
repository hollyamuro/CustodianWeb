import React from "react";
import PropTypes from "prop-types";
import DeleteUserItem from "./DeleteUserItem";
import GroupUserFilter from "../containers/GroupUserFilter";

import "../style.css";

const DeleteUsersList = ({
	users,
	selectedGroup,
	onDispatchItemEvent,
}) => {
	return (selectedGroup === "") ? "" : (
		<div className="cust-list-danger">

			<div className="row justify-content-around cust-list-header">
				<div className="col ">
					<small className="form-text text-muted">已加入群組之使用者</small>
				</div>
				<div className="col-md-3">
					<GroupUserFilter />
				</div>
			</div>
			<div className="row">
				{users.map(u =>
					<div className={"col-auto"}>
						<DeleteUserItem user={u} onDeleteClick={() => { onDispatchItemEvent(selectedGroup, u.id); }} />
					</div>
				)}
			</div>
			{((users.length === 0) ? <div className="alert alert-danger col" role="alert">查無資料</div> : "")}
		</div>
	);
};

DeleteUsersList.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			"id": PropTypes.number.isRequired,
			"employee_id": PropTypes.string.isRequired,
			"employee_name": PropTypes.string.isRequired,
			"dept_id": PropTypes.string.isRequired,
			"dept_name": PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
	selectedGroup: PropTypes.string.isRequired,
	onDispatchItemEvent: PropTypes.func.isRequired,
};

export default DeleteUsersList;