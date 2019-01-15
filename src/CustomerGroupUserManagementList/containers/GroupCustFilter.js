"use strict";

import { connect } from "react-redux";
import { setGroupCustFilter } from "../actions";
import SinoRoundTextBox from "../../SinoComponent/SinoRoundTextBox";

const mapStateToProps = state => ({
	title:  "",
	hint:   "Search...",
	text:   state.groupCustFilter,
});

const mapDispatchToProps = dispatch => ({
	onTextChange: (event)=>{ 
		dispatch(setGroupCustFilter(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoRoundTextBox);
