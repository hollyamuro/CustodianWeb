"use strict";

import { connect } from "react-redux";
import { setIdFilter } from "../actions";
import SinoTextBox from "../../SinoComponent/SinoTextBox";

const mapStateToProps = state => ({
	title:  "搜尋關鍵字",
	hint:   "Search...",
	text:   state.idFilter,
});

const mapDispatchToProps = dispatch => ({
	onTextChange: (event)=>{ dispatch(setIdFilter(event.target.value));}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoTextBox);
