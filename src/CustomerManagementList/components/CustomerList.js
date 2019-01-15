"use strict";

import React from "react";
import PropTypes from "prop-types";
import CustomerRow from "./CustomerRow";

import "../style.css";

const CustomerList = ({customers, clickInviteMail, clickPasswordMail}) => (
	<div>
		<br/>
		<div className="row">
			{ customers.map( c =>
				<CustomerRow
					key={c.c_account_no +"_"+ c.c_sino_account} 
					{...c}
					onClickSendInviteMail={() => clickInviteMail(c.c_account_no, c.c_sino_account)}
					onClickSendPasswordMail={() => clickPasswordMail(c.c_account_no, c.c_email)}
				/>
			)}
		</div>
		{
			((customers.length === 0)?<div className="alert alert-danger" role="alert">查無資料</div>:"")
		}
	</div>
);

CustomerList.propTypes = {
	customers: PropTypes.arrayOf(
		PropTypes.shape({
			c_account_no:     PropTypes.string.isRequired,
			c_account_name:   PropTypes.string.isRequired,
			c_email:          PropTypes.string.isRequired,
			c_acc_status:     PropTypes.string.isRequired,
			c_acc_type:       PropTypes.string.isRequired,
			c_sino_account:   PropTypes.string.isRequired,
			ca_status:         PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
	clickInviteMail: PropTypes.func.isRequired,
	clickPasswordMail: PropTypes.func.isRequired,
};

export default CustomerList;