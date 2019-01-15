"use strict";

import React from "react";
import GroupSelectList from "../containers/GroupSelectList";
import CustsShowList from "../containers/CustsShowList";
import GroupCustsShowList from "../containers/GroupCustsShowList";
import ShowLoading from "../containers/ShowLoading";
import ShowMessage from "../containers/ShowMessage";

const MainFrame = () => (
	<div>
		<GroupSelectList/><br/>
		<GroupCustsShowList/><br/>
		<CustsShowList/><br/>
		<ShowLoading/>
		<ShowMessage/>
	</div>
);

export default MainFrame;
