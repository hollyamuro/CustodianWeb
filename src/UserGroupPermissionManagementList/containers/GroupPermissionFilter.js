"use strict";

import { connect } from "react-redux";
import { setGroupPermissionFilter } from "../actions";
import SinoRoundTextBox from "../../SinoComponent/SinoRoundTextBox";

const mapStateToProps = state => ({
	title:  "",
	hint:   "Search...",
	text:   state.groupPermissionFilter,
});

const mapDispatchToProps = dispatch => ({
	onTextChange: (event)=>{ dispatch(setGroupPermissionFilter(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoRoundTextBox);
