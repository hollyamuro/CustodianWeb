"use strict";

import { connect } from "react-redux";
import  SinoSelect from "../../SinoComponent/SinoSelect";
import { setRoleFilter } from "../actions";
import { RoleFilters } from "../constants";

const mapStateToProps = state => ({
	title:  "依角色篩選",
	hint: "",
	options: RoleFilters,
	selectedOption: state.roleFilter,
});

const mapDispatchToProps = dispatch => ({
	onOptionChange: (event)=>{ dispatch(setRoleFilter(event.target.value));}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoSelect);
