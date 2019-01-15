import React from "react";
import PropTypes from "prop-types";

import "../style.css";

const DeleteUserItem = ({
	user,
	onDeleteClick,
}) => (
	<div className="component-wrapper-danger">
		<div className="item-wrapper">
			<div className="item-text-content">
				<small className="form-text text-muted">
					<div className="text-wrapper">{user.dept_id + " " + user.dept_name}</div>
				</small>
				<div className="text-wrapper"><span>{user.employee_id + " " + user.employee_name}</span></div>
			</div>
		</div>
		<div className="button-wrapper">
			<button className="btn btn-outline-danger round-button" onClick={onDeleteClick}>-</button>
		</div>
	</div>
);

DeleteUserItem.propTypes = {
	user: PropTypes.shape({
		"id": PropTypes.number.isRequired,
		"employee_id": PropTypes.string.isRequired,
		"employee_name": PropTypes.string.isRequired,
		"dept_id": PropTypes.string.isRequired,
		"dept_name": PropTypes.string.isRequired,
	}).isRequired,
	onDeleteClick: PropTypes.func.isRequired,
};

export default DeleteUserItem;