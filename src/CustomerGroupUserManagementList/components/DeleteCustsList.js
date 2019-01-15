import React from "react";
import PropTypes from "prop-types";
import DeleteCustItem from "./DeleteCustItem";
import GroupCustFilter from "../containers/GroupCustFilter";

import "../style.css";

const DeleteCustsList = ({
	custs,
	selectedGroup,
	onDispatchItemEvent,
}) => {
	return (selectedGroup==="")?"":(
		<div className="cust-list-danger">

			<div className="row justify-content-around cust-list-header">
				<div className="col ">
					<small className="form-text text-muted">已加入群組之客戶</small>
				</div>
				<div className="col-md-3">
					<GroupCustFilter/>
				</div>
			</div>
			<div className="row">
				{custs.map(c=>
				
					<div className={"col-auto"}>
						<DeleteCustItem cust={c} onDeleteClick={()=>{ onDispatchItemEvent(selectedGroup, c.c_account_no, c.c_sino_account); }} />
					</div> 
				)}
			</div> 
			{ ((custs.length === 0)?<div className="alert alert-danger col" role="alert">查無資料</div>:"")}
		</div>
	);
};

DeleteCustsList.propTypes = {
	custs: PropTypes.arrayOf(
		PropTypes.shape({
			c_account_no: PropTypes.string.isRequired,
			c_account_name: PropTypes.string.isRequired,
			c_sino_account: PropTypes.string.isRequired,
			c_acc_type: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
	selectedGroup: PropTypes.string.isRequired,
	onDispatchItemEvent: PropTypes.func.isRequired,
};

export default DeleteCustsList;