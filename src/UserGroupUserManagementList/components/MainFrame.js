"use strict";

import React from "react";
import GroupSelectList from "../containers/GroupSelectList";
import UserShowList from "../containers/UserShowList";
import GroupUsersShowList from "../containers/GroupUsersShowList";
import ShowLoading from "../containers/ShowLoading";
import ShowMessage from "../containers/ShowMessage";

const MainFrame = () => (
	<div>
		<GroupSelectList /><br />
		<GroupUsersShowList /><br />
		<UserShowList /><br />
		<ShowLoading />
		<ShowMessage />
	</div>
);

export default MainFrame;
