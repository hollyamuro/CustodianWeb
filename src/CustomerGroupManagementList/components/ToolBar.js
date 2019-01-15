"use strict";

import React from "react";
import GroupFilter from "../containers/GroupFilter";
import RoleFilter from "../containers/RoleFilter";
import ProductFilter from "../containers/ProductFilter";
import LoadGroupListButton from "../containers/LoadGroupListButton";

const ToolBar = () => (
	<div className="row">
		<div className="col-sm-3">  
			<GroupFilter/>
		</div>
		<div className="col-sm-3">  
			<RoleFilter/>
		</div>
		<div className="col-sm-3">  
			<ProductFilter/>
		</div>
		<div className="col-sm-3 align-right">  
			<small className="form-text text-muted"><br/></small>
			<LoadGroupListButton/>
		</div>
	</div>
);

export default ToolBar;
