"use strict";

import { connect } from "react-redux";
import { setGroupUserFilter } from "../actions";
import SinoRoundTextBox from "../../SinoComponent/SinoRoundTextBox";

const mapStateToProps = state => ({
	title: "",
	hint: "Search...",
	text: state.groupUserFilter,
});

const mapDispatchToProps = dispatch => ({
	onTextChange: (event) => {
		dispatch(setGroupUserFilter(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoRoundTextBox);
