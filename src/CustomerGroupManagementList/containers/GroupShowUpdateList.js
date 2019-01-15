"use strict";

import { connect } from "react-redux";
import GroupUpdateList from "../components/GroupUpdateList";
import { deleteGroup, updateGroup, setUpdateGroupName, setUpdateGroupDescription, setUpdateGroupRole, setUpdateGroupProduct } from "../actions";

//do filter:
const getGroupFilterList = (groups, groupFilter) => {
	return (!groupFilter.trim()) ? (groups) : (groups.filter(g => {
		return (g.cg_name.includes(groupFilter)) || (g.cg_description.includes(groupFilter));
	}));
};

const getRoleFilterList = (groups, roleFilter) => {
	switch (roleFilter) {
	case "SHOW_ALL":
		return groups;
	case "SHOW_C":
		return groups.filter((g) => { return (g.cg_role === "C"); });
	}
	return groups;
};

const getProductFilterList = (groups, productFilter) => {
	switch (productFilter) {
	case "SHOW_ALL":
		return groups;
	case "SHOW_CUSTODIAN":
		return groups.filter((g) => { return (g.cg_product === "Custodian"); });
	}
	return groups;
};

const mapStateToProps = state => ({
	groups:
		getRoleFilterList(
			getProductFilterList(
				getGroupFilterList(state.groups, state.groupFilter),
				state.productFilter
			),
			state.roleFilter
		),
});

const mapDispatchToProps = dispatch => ({
	onUpgradeGroupNameChange: (id, value) => { dispatch(setUpdateGroupName(id, value)); },
	onUpgradeGroupDescriptionChange: (id, value) => { dispatch(setUpdateGroupDescription(id, value)); },
	onUpgradeGroupRoleChange: (id, value) => { dispatch(setUpdateGroupRole(id, value)); },
	onUpgradeGroupProductChange: (id, value) => { dispatch(setUpdateGroupProduct(id, value)); },
	onUpgradeGroupBtnClick: (id) => { dispatch(updateGroup(id)); },
	onDeleteGroupBtnClick: (id) => { dispatch(deleteGroup(id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupUpdateList);