"use strict";

import { connect } from "react-redux";
import { setActiveFilter } from "../actions";
import  SinoSelect from "../../SinoComponent/SinoSelect";
import { ActiveFilters } from "../constants";

const mapStateToProps = state => ({
	title:  "銷戶狀態",
	hint: "",
	options: ActiveFilters,
	selectedOption: state.activeFilter
});

const mapDispatchToProps = dispatch => ({
	onOptionChange: (event)=>{ dispatch(setActiveFilter(event.target.value));}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoSelect);
