"use strict";

import { connect } from "react-redux";
import GroupCreateFrame from "../components/GroupCreateFrame";
import { setCreateGroupName, setCreateGroupDescription, setCreateGroupRole, setCreateGroupProduct, createGroup } from "../actions";

const mapStateToProps = state => ({
	group: state.createdGroup
});

const mapDispatchToProps = (dispatch) => ({
	onCreateGroupNameChange: (event)=>{ dispatch(setCreateGroupName(event.target.value));}, 
	onCreateGroupDescriptionChange: (event)=>{ dispatch(setCreateGroupDescription(event.target.value));}, 
	onCreateGroupRoleChange: (event)=>{ dispatch(setCreateGroupRole(event.target.value));}, 
	onCreateGroupProductChange: (event)=>{ dispatch(setCreateGroupProduct(event.target.value));}, 
	onCreateGroupBtnClick: ()=>{ dispatch(createGroup());},
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupCreateFrame);