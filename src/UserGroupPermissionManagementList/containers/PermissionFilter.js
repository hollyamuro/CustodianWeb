"use strict";

import { connect } from "react-redux";
import { setPermissionFilter } from "../actions";
import SinoRoundTextBox from "../../SinoComponent/SinoRoundTextBox";

const mapStateToProps = state => ({
	title:  "",
	hint:   "Search...",
	text:   state.permissionFilter,
});

const mapDispatchToProps = dispatch => ({
	onTextChange: (event)=>{ dispatch(setPermissionFilter(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoRoundTextBox);
