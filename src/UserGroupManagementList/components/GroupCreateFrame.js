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
}) => (
	<div className="card-columns">
		<div className="card border-secondary">
			<div className="card-body text-secondary">

				<p><span className="card-title">新增群組</span></p>
				<GroupItem
					key={group.g_id}
					group={group}
					onGroupNameChange={onCreateGroupNameChange}
					onGroupDescriptionChange={onCreateGroupDescriptionChange}
					onGroupRoleChange={onCreateGroupRoleChange}
					onGroupProductChange={onCreateGroupProductChange}
				/>
				<div className="align-right">
					<small className="form-text text-muted"><br /></small>
					<button type="button" id="create-group-button" className="btn btn-outline-secondary" onClick={onCreateGroupBtnClick} >新增群組</button>
				</div>
			</div>
		</div>
	</div>
);

GroupCreateFrame.propTypes = {
	group: PropTypes.shape({
		g_id: PropTypes.number.isRequired,
		g_name: PropTypes.string.isRequired,
		g_description: PropTypes.string.isRequired,
		g_role: PropTypes.string.isRequired,
		g_product: PropTypes.string.isRequired,
	}).isRequired,
	onCreateGroupNameChange: PropTypes.func.isRequired,
	onCreateGroupDescriptionChange: PropTypes.func.isRequired,
	onCreateGroupRoleChange: PropTypes.func.isRequired,
	onCreateGroupProductChange: PropTypes.func.isRequired,
	onCreateGroupBtnClick: PropTypes.func.isRequired,
};

export default GroupCreateFrame;
