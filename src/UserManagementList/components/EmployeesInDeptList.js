import React from "react";
import PropTypes from "prop-types";
import AddEmployeeItem from "./AddEmployeeItem";
import ShowEmployeesInDeptFilter from "../containers/ShowEmployeesInDeptFilter";

import "../style.css";

const EmployeesInDeptList = ({
	employees,
	selectedGroup,
	onItemClicked,
}) => {
	return (
		<div className="cust-list-secondary">
			<div className="row justify-content-around cust-list-header">
				<div className="col ">
					<small className="form-text text-muted">未加入系統之使用者</small>
				</div>
				<div className="col-md-3">
					<ShowEmployeesInDeptFilter />
				</div>
			</div>
			<div className="row">
				{employees.map(e =>
					<div className={"col-auto"}>
						<AddEmployeeItem
							employee={e}
							onItemBtnClicked={() => {
								onItemClicked(e);
							}} />
					</div>
				)}
			</div>
			{((employees.length === 0) ? <div className="alert alert-danger col-12" role="alert">查無資料</div> : "")}
		</div>
	);
};

EmployeesInDeptList.propTypes = {
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

EmployeesInDeptList.defaultProps = {
	employees: [],
	selectedGroup: {},
	onItemClicked: () => { }
};

export default EmployeesInDeptList;