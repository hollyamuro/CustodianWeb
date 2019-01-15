import React from "react";
import PropTypes from "prop-types";
import GroupItem from "./GroupItem";

import "../style.css";

const GroupCreateFrame = ({
	group,
	onCreateGroupNameChange,
	onCreateGroupDescriptionChange,
	onCreateGroupRoleChange,
	onCreateGroupProductChange,
	onCreateGroupBtnClick
})=>(
	<div className="card-columns">
		<div className="card border-primary">
			<div className="card-body text-primary">

				<p><span className="card-title">新增群組</span></p>
				<GroupItem
					key={group.cg_id}
					group={group}
					onGroupNameChange = {onCreateGroupNameChange}
					onGroupDescriptionChange = {onCreateGroupDescriptionChange}
					onGroupRoleChange = {onCreateGroupRoleChange}
					onGroupProductChange = {onCreateGroupProductChange}
				/>
				<div className="align-right">
					<small className="form-text text-muted"><br/></small>
					<button type="button" id="create-group-button" className="btn btn-outline-primary" onClick={onCreateGroupBtnClick} >新增群組</button>
				</div>
			</div>
		</div>
	</div>
);

GroupCreateFrame.propTypes = {
	group: PropTypes.shape({
		cg_id:          PropTypes.number.isRequired,
		cg_name:        PropTypes.string.isRequired,
		cg_description: PropTypes.string.isRequired,
		cg_role:        PropTypes.string.isRequired,
		cg_product:     PropTypes.string.isRequired,        
	}).isRequired,
	onCreateGroupNameChange:        PropTypes.func.isRequired,
	onCreateGroupDescriptionChange: PropTypes.func.isRequired,
	onCreateGroupRoleChange:        PropTypes.func.isRequired,
	onCreateGroupProductChange:     PropTypes.func.isRequired,
	onCreateGroupBtnClick:          PropTypes.func.isRequired,
};

export default GroupCreateFrame;
