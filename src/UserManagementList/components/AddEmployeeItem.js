import React from "react";
import PropTypes from "prop-types";

import "../style.css";

const AddEmployeeItem = ({
	employee,
	onItemBtnClicked,
}) => (
	<div className="component-wrapper-secondary">
		<div className="item-wrapper">
			<div className="item-text-content">
				<small className="form-text text-muted">{employee.dept_id + " " + employee.dept_name}</small>
				<div className="text-wrapper"><span>{employee.employee_id + " " + employee.employee_name}</span></div>
			</div>
		</div>
		<div className="button-wrapper">
			<button className="btn btn-outline-secondary round-button" onClick={onItemBtnClicked}>+</button>
		</div>
	</div>
);

AddEmployeeItem.propTypes = {
	employee: PropTypes.shape({
		"id": PropTypes.number.isRequired,
		"employee_id": PropTypes.string.isRequired,
		"employee_name": PropTypes.string.isRequired,
		"dept_id": PropTypes.string.isRequired,
		"dept_name": PropTypes.string.isRequired,
	}).isRequired,
	onItemBtnClicked: PropTypes.func.isRequired,
};

AddEmployeeItem.defaultProps = {
	employee: {},
	onItemBtnClicked: () => { }
};

export default AddEmployeeItem;