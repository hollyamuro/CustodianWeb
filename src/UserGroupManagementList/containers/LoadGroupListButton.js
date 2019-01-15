"use strict";

import React from "react";
import { connect } from "react-redux";
import { loadGroups } from "../actions";

const LoadGroupListButton = ({ dispatch }) => {

	return (
		<form className="inline"
			onSubmit={e => {
				e.preventDefault();
				dispatch(loadGroups());
			}
			}
		>
			<button type="submit" className="btn btn-outline-secondary" id="load-group-list-button">取得群組資料</button>
		</form>
	);
};

export default connect()(LoadGroupListButton);