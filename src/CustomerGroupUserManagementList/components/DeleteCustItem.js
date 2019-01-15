import React from "react";
import PropTypes from "prop-types";

import "../style.css";

const DeleteCustItem = ({
	cust,
	onDeleteClick,
}) => (
		<div className="component-wrapper-danger">
			<div className="item-wrapper">
				<div className="item-text-content">
					<small className="form-text text-muted">
						<div className="text-wrapper" title={cust.c_account_no + ((cust.c_acc_type === 'S') ? ('(' + cust.c_sino_account + ')') : (''))}>
							{cust.c_account_no}
						</div>
					</small>
					<div className="text-wrapper" title={cust.c_account_name}>
						<span>
							{(cust.c_account_name.length > 15) ? cust.c_account_name.substring(0, 14) + "..." : cust.c_account_name}
						</span>
					</div>
				</div>
			</div>
			<div className="button-wrapper">
				<button className="btn btn-outline-danger round-button" onClick={onDeleteClick}>-</button>
			</div>
		</div>
	);

DeleteCustItem.propTypes = {
	cust: PropTypes.shape({
		c_account_no: PropTypes.string.isRequired,
		c_account_name: PropTypes.string.isRequired,
		c_sino_account: PropTypes.string.isRequired,
		c_acc_type: PropTypes.string.isRequired,
	}).isRequired,
	onDeleteClick: PropTypes.func.isRequired,
};

export default DeleteCustItem;