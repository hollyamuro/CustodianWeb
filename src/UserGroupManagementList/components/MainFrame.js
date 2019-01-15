"use strict";

import React from "react";
import GroupShowUpdateList from "../containers/GroupShowUpdateList";
import GroupShowCreateFrame from "../containers/GroupShowCreateFrame";
import ToolBar from "../components/ToolBar";
import ShowLoading from "../containers/ShowLoading";
import ShowMessage from "../containers/ShowMessage";

const MainFrame = () => (
	<div>
		<GroupShowCreateFrame />
		<hr />
		<ToolBar />
		<GroupShowUpdateList />
		<ShowLoading />
		<ShowMessage />
	</div>
);

export default MainFrame;
