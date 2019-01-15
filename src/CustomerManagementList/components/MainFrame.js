"use strict";

import React from "react";
import ToolBar from "./ToolBar";
import ShowCustomerList from "../containers/ShowCustomerList";
import ShowLoading from "../containers/ShowLoading";
import ShowMessage from "../containers/ShowMessage";

const MainFrame = () => (
	<div>
		<ToolBar/>
		<ShowCustomerList/>
		<ShowLoading/>
		<ShowMessage/>
	</div>
);

export default MainFrame;
