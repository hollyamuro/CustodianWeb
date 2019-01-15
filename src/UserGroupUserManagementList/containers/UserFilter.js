"use strict";

import { connect } from "react-redux";
import { setUserFilter } from "../actions";
import SinoRoundTextBox from "../../SinoComponent/SinoRoundTextBox";

const mapStateToProps = state => ({
	title: "",
	hint: "Search...",
	text: state.custFilter,
});

const mapDispatchToProps = dispatch => ({
	onTextChange: (event) => {
		dispatch(setUserFilter(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoRoundTextBox);
