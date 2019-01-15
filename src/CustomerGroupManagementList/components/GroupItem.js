
import React from "react";
import PropTypes from "prop-types";
import { GroupRole, GroupProduct } from "../constants";
import SinoTextBox from "../../SinoComponent/SinoTextBox";
import SinoSelect from "../../SinoComponent/SinoSelect";

const GroupItem = ({
	group,
	onGroupNameChange,
	onGroupDescriptionChange,
	onGroupRoleChange,
	onGroupProductChange,
}) => (
	<div>
		<SinoTextBox title='群組名稱' hint='群組名稱' text={group.cg_name} onTextChange={onGroupNameChange} />
		<SinoTextBox title='群組描述' hint='群組描述' text={group.cg_description} onTextChange={onGroupDescriptionChange} />
		<SinoSelect title= '群組角色' hint='-- 請選擇群組角色 --' 
			options={GroupRole} selectedOption={group.cg_role} onOptionChange={onGroupRoleChange} />
		<SinoSelect title= '群組產品' hint='-- 請選擇群組產品 --'
			options={GroupProduct} selectedOption={group.cg_product} onOptionChange={onGroupProductChange}
		/>
	</div>
);

GroupItem.propTypes = {
	group: PropTypes.shape({
		cg_id:          PropTypes.number.isRequired,
		cg_name:        PropTypes.string.isRequired,
		cg_description: PropTypes.string.isRequired,
		cg_role:        PropTypes.string.isRequired,
		cg_product:     PropTypes.string.isRequired,        
	}).isRequired,
	onGroupNameChange:        PropTypes.func.isRequired,
	onGroupDescriptionChange: PropTypes.func.isRequired,
	onGroupRoleChange:        PropTypes.func.isRequired,
	onGroupProductChange:     PropTypes.func.isRequired,
};

export default GroupItem;