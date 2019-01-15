import React from "react";
import PropTypes from "prop-types";
import AddUserItem from "./AddUserItem";
import UserFilter from "../containers/UserFilter";

import "../style.css";

const AddUsersList = ({
	users,
	selectedGroup,
	onDispatchItemEvent,
}) => {

	return (selectedGroup === "") ? "" : (
		<div className="cust-list-secondary">
			<div className="row justify-content-around cust-list-header">
				<div className="col ">
					<small className="form-text text-muted">未加入群組之使用者</small>
				</div>
				<div className="col-md-3">
					<UserFilter />
				</div>
			</div>
			<div className="row">
				{users.map(u =>
					<div className={"col-auto"}>
						<AddUserItem user={u} onAddClick={() => { onDispatchItemEvent(selectedGroup, u.id); }} />
					</div>
				)}
			</div>
			{((users.length === 0) ? <div className="alert alert-danger col-12" role="alert">查無資料</div> : "")}
		</div>
	);
};

AddUsersList.propTypes = {
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

export default AddUsersList;