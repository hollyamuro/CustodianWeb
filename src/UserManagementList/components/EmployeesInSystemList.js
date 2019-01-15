import React from "react";
import PropTypes from "prop-types";
import DeleteEmployeeItem from "./DeleteEmployeeItem";
import ShowEmployeesInSystemFilter from "../containers/ShowEmployeesInSystemFilter";

import "../style.css";

const EmployeesInSystemList = ({
	employees,
	selectedGroup,
	onItemClicked,
}) => {
	return (
		<div className="cust-list-danger">
			<div className="row justify-content-around cust-list-header">
				<div className="col ">
					<small className="form-text text-muted">已經加入系統之使用者</small>
				</div>
				<div className="col-md-3">
					<ShowEmployeesInSystemFilter />
				</div>
			</div>
			<div className="row">
				{employees.map(e =>
					<div className={"col-auto"}>
						<DeleteEmployeeItem employee={e} onItemBtnClicked={() => {
							onItemClicked(e);
						}} />
					</div>
				)}
			</div>
			{((employees.length === 0) ? <div className="alert alert-danger col-12" role="alert">查無資料</div> : "")}
		</div>
	);
};

EmployeesInSystemList.propTypes = {
	employees: PropTypes.arrayOf(
		PropTypes.shape({
			"id": PropTypes.number.isRequired,
			"employee_id": PropTypes.string.isRequired,
			"employee_name": PropTypes.string.isRequired,
			"dept_id": PropTypes.string.isRequired,
			"dept_name": PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
	selectedGroup: PropTypes.object.isRequired,
	onItemClicked: PropTypes.func.isRequired,
};

EmployeesInSystemList.defaultProps = {
	employees: [],
	selectedGroup: {},
	onItemClicked: () => { }
};

export default EmployeesInSystemList;