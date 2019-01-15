"use strict";

import { connect } from "react-redux";
import { setEmployeesInDeptFilter } from "../actions";
import SinoRoundTextBox from "../../SinoComponent/SinoRoundTextBox";

const mapStateToProps = state => ({
	title: "",
	hint: "Search...",
	text: state.employeesInDeptFilter,
});

const mapDispatchToProps = dispatch => ({
	onTextChange: (event) => {
		dispatch(setEmployeesInDeptFilter(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoRoundTextBox);
