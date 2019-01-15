import React from "react";
import PropTypes from "prop-types";
import GroupItem from "./GroupItem";

import "../style.css";

const GroupUpdateFrame = ({
	group,
	onUpgradeGroupNameChange,
	onUpgradeGroupDescriptionChange,
	onUpgradeGroupRoleChange,
	onUpgradeGroupProductChange,
	onUpgradeGroupBtnClick,
	onDeleteGroupBtnClick,
})=>(
	<div className="card border-primary">
		<div className="card-body text-primary">
			<p><span className="card-title">修改/刪除群組</span></p>
			<GroupItem
				key={group.cg_id}
				group = {group}
				onGroupNameChange={(event)=>{ onUpgradeGroupNameChange(group.cg_id, event.target.value); } }
				onGroupDescriptionChange={(event)=>{ onUpgradeGroupDescriptionChange(group.cg_id, event.target.value); } }
				onGroupRoleChange={(event)=>{ onUpgradeGroupRoleChange(group.cg_id, event.target.value); } }
				onGroupProductChange={(event)=>{ onUpgradeGroupProductChange(group.cg_id, event.target.value); } }
			/>
			<div className="align-right">
				<small className="form-text text-muted"><br/></small>
				<button type="button" id="update-group-button" className="btn btn-outline-primary" 
					onClick={()=>{onUpgradeGroupBtnClick(group.cg_id);}} >修改群組</button>
				<button type="button" id="delete-group-button" className="btn btn-outline-primary" 
					onClick={()=>{ onDeleteGroupBtnClick(group.cg_id);}} >刪除群組</button>
			</div>
		</div>
	</div>
);

GroupUpdateFrame.propTypes = {
	group: PropTypes.shape({
		cg_id:          PropTypes.number.isRequired,
		cg_name:        PropTypes.string.isRequired,
		cg_description: PropTypes.string.isRequired,
		cg_role:        PropTypes.string.isRequired,
		cg_product:     PropTypes.string.isRequired,        
	}).isRequired,
	onUpgradeGroupNameChange:        PropTypes.func.isRequired,
	onUpgradeGroupDescriptionChange: PropTypes.func.isRequired,
	onUpgradeGroupRoleChange:        PropTypes.func.isRequired,
	onUpgradeGroupProductChange:     PropTypes.func.isRequired,
	onUpgradeGroupBtnClick:          PropTypes.func.isRequired,
	onDeleteGroupBtnClick:           PropTypes.func.isRequired,
};

export default GroupUpdateFrame;
