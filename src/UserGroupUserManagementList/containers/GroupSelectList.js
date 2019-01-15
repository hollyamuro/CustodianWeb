"use strict";

import { connect } from "react-redux";
import SinoSelect from "../../SinoComponent/SinoSelect";
import { setSelectedGroup, refreshGroup } from "../actions";

const mapStateToProps = state => ({
	title: "請選擇欲異動之群組",
	hint: "-- 請選擇群組 --",
	options: state.groups,
	selectedOption: state.selectedGroup,
});

const mapDispatchToProps = dispatch => ({
	onOptionChange: (event) => {
		dispatch(setSelectedGroup(event.target.value));
		dispatch(refreshGroup());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoSelect);
