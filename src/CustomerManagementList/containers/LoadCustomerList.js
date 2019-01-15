"use strict";

import React from "react";
import { connect } from "react-redux";
import { loadCustList } from "../actions";

const LoadCustomerList = ({dispatch}) => {
    
	return (
		<form className="inline"
			onSubmit={e => {
				e.preventDefault();
				dispatch(loadCustList());
			}
			}
		>
			<button type="submit" className="btn btn-outline-primary" id="load-customer-list-button">取得客戶資料</button>
		</form>
	);
};

export default connect()(LoadCustomerList);