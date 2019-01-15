"use strict";

import { connect } from "react-redux";
import { setGroupFilter } from "../actions";
import SinoTextBox from "../../SinoComponent/SinoTextBox";

const mapStateToProps = state => ({
	title:  "搜尋關鍵字",
	hint:   "Search...",
	text:   state.groupFilter,
});

const mapDispatchToProps = dispatch => ({
	onTextChange: (event)=>{ dispatch(setGroupFilter(event.target.value));}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoTextBox);
