"use strict";

import { connect } from "react-redux";
import { setStatusFilter } from "../actions";
import  SinoSelect from "../../SinoComponent/SinoSelect";
import { StatusFilters } from "../constants";

const mapStateToProps = state => ({
	title:  "運行狀態",
	hint: "",
	options: StatusFilters,
	selectedOption: state.statusFilter
});

const mapDispatchToProps = dispatch => ({
	onOptionChange: (event)=>{ dispatch(setStatusFilter(event.target.value));}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoSelect);
