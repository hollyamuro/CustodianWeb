import React from "react";
import PropTypes from "prop-types";
import GroupUpdateFrame from "./GroupUpdateFrame";

const GroupUpdateList = ({
	groups,
	onUpgradeGroupNameChange,
	onUpgradeGroupDescriptionChange,
	onUpgradeGroupRoleChange,
	onUpgradeGroupProductChange,
	onUpgradeGroupBtnClick,
	onDeleteGroupBtnClick,
}) => (
	<div>
		<br />
		<div className="card-columns">
			{groups.map(i =>
				<GroupUpdateFrame
					key={i.g_id}
					group={i}
					onUpgradeGroupNameChange={onUpgradeGroupNameChange}
					onUpgradeGroupDescriptionChange={onUpgradeGroupDescriptionChange}
					onUpgradeGroupRoleChange={onUpgradeGroupRoleChange}
					onUpgradeGroupProductChange={onUpgradeGroupProductChange}
					onUpgradeGroupBtnClick={onUpgradeGroupBtnClick}
					onDeleteGroupBtnClick={onDeleteGroupBtnClick}
				/>
			)}
		</div>
		{
			((groups.length === 0) ? <div className="alert alert-danger" role="alert">查無資料</div> : "")
		}
	</div>
);

GroupUpdateList.propTypes = {
	groups: PropTypes.arrayOf(
		PropTypes.shape({
			g_id: PropTypes.number.isRequired,
			g_name: PropTypes.string.isRequired,
			g_description: PropTypes.string.isRequired,
			g_role: PropTypes.string.isRequired,
			g_product: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
	onUpgradeGroupNameChange: PropTypes.func.isRequired,
	onUpgradeGroupDescriptionChange: PropTypes.func.isRequired,
	onUpgradeGroupRoleChange: PropTypes.func.isRequired,
	onUpgradeGroupProductChange: PropTypes.func.isRequired,
	onUpgradeGroupBtnClick: PropTypes.func.isRequired,
	onDeleteGroupBtnClick: PropTypes.func.isRequired,
};

export default GroupUpdateList;