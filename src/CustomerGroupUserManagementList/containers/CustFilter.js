"use strict";

import { connect } from "react-redux";
import { setCustFilter } from "../actions";
import SinoRoundTextBox from "../../SinoComponent/SinoRoundTextBox";

const mapStateToProps = state => ({
	title:  "",
	hint:   "Search...",
	text:   state.custFilter,
});

const mapDispatchToProps = dispatch => ({
	onTextChange: (event)=>{ dispatch(setCustFilter(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoRoundTextBox);
