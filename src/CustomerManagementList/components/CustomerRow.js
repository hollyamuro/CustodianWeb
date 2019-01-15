"use strict";

import React from "react";
import PropTypes from "prop-types";
import { AccountStatus } from "../constants";
import "../style.css";

const CustomerRow = (
	{ c_account_no,
		c_account_name,
		c_email,
		c_acc_status,
		c_acc_type,
		c_sino_account,
		ca_status,
		onClickSendInviteMail,
		onClickSendPasswordMail,
	}
) => (
		<div className={(c_acc_status === "0") ? "cust-row-wrapper-secondary col-auto" : "cust-row-wrapper-primary col-auto"}>
			<p>
				<span className={(c_acc_status === "0") ? "cust-row-title-wrapper-secondary" : "cust-row-title-wrapper-primary"}>
					{c_account_no}
				</span>
				<small className="form-text text-muted cust-name-wrapper">Name: {c_account_name}{(c_acc_type === "S") ? "(" + c_sino_account + ")" : ""} </small>
				<small className="form-text text-muted">MAIL: {c_email} </small>
				<small className="form-text text-muted">狀態: {AccountStatus[ca_status] || "未定義"}{(c_acc_status === "0") ? "(已銷戶)" : ""} </small>
			</p>
			<button
				className={(c_acc_status === "0") ? "btn btn-outline-secondary tmp" : "btn btn-outline-primary tmp"}
				disabled={(c_acc_status === "0")}
				type='button'
				id='invite-mail-button'
				onClick={onClickSendInviteMail}>寄送邀請函</button>
			<button
				className={(c_acc_status === "0") ? "btn btn-outline-secondary tmp" : "btn btn-outline-primary tmp"}
				disabled={(c_acc_status === "0")}
				type='button'
				id='password-mail-button'
				onClick={onClickSendPasswordMail}>寄送密碼設定函</button>
		</div>
	);

CustomerRow.propTypes = {
	c_account_no: PropTypes.string.isRequired,
	c_account_name: PropTypes.string.isRequired,
	c_email: PropTypes.string.isRequired,
	c_acc_status: PropTypes.string.isRequired,
	c_acc_type: PropTypes.string.isRequired,
	c_sino_account: PropTypes.string.isRequired,
	ca_status: PropTypes.string.isRequired,

	onClickSendInviteMail: PropTypes.func.isRequired,
	onClickSendPasswordMail: PropTypes.func.isRequired,
};

export default CustomerRow;
