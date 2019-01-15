"use strict";

import React from "react";
import GroupSelectList from "../containers/GroupSelectList";
import AddPermissionShowList from "../containers/AddPermissionShowList";
import DeletePermissionShowList from "../containers/DeletePermissionShowList";
import ShowLoading from "../containers/ShowLoading";
import ShowMessage from "../containers/ShowMessage";
const MainFrame = () => (
	<div>
		<GroupSelectList/>
		<br/>
		<DeletePermissionShowList/>
		<br/>
		<AddPermissionShowList/>
		<br/>
		<ShowLoading/>
		<ShowMessage/>
	</div>
);

export default MainFrame;