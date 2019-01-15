"use strict";

import React from "react";
import IdFilter from "../containers/IdFilter";
import ActiveFilter from "../containers/ActiveFilter";
import StatusFilter from "../containers/StatusFilter";
import LoadCustomerList from "../containers/LoadCustomerList";
import ImportCustomerList from "../containers/ImportCustomerList";

const ToolBar = () => (
	<div className="row">
		<div className="col-sm-3">  
			<IdFilter/>
		</div>
		<div className="col-sm-3">  
			<ActiveFilter/>
		</div>
		<div className="col-sm-3">  
			<StatusFilter/>
		</div>
		<div className="col-sm-3 align-right">  
			<small className="form-text text-muted"><br/></small>
			<LoadCustomerList/>
			<ImportCustomerList/>
		</div>
	</div>
);

export default ToolBar;
