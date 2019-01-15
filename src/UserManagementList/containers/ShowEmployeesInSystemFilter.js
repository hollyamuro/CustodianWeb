"use strict";

import { connect } from "react-redux";
import { setEmployeesInSystemFilter } from "../actions";
import SinoRoundTextBox from "../../SinoComponent/SinoRoundTextBox";

const mapStateToProps = state => ({
	title: "",
	hint: "Search...",
	text: state.employeesInSystenFilter,
});

const mapDispatchToProps = dispatch => ({
	onTextChange: (event) => {
		dispatch(setEmployeesInSystemFilter(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoRoundTextBox);
