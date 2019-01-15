"use strict";

import React from "react";
import { connect } from "react-redux";
import { importCustList } from "../actions";

const ImportCustomerList = ({dispatch}) => {
    
	return (
		<form className="inline"
			onSubmit={e => {
				e.preventDefault();
				dispatch(importCustList());
			}
			}
		>
			<button type="submit" className="btn btn-outline-primary" id="import-customer-list-button">匯入客戶資料</button>
		</form>
	);
};

export default connect()(ImportCustomerList);