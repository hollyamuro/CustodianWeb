"use strict";

import React from "react";
import ShowDeptSelect from "../containers/ShowDeptSelect";
import ShowEmployeesInDeptList from "../containers/ShowEmployeesInDeptList";
import ShowEmployeesInSystemList from "../containers/ShowEmployeesInSystemList";
import ShowLoading from "../containers/ShowLoading";
import ShowMessage from "../containers/ShowMessage";

const MainFrame = () => (
	<div>
		<small class="form-text text-muted">新增使用者請先搜尋部門，再選擇欲新增之使用者。異動使用者請直接在下畫面操作。</small>
		<ShowDeptSelect /><br />
		<ShowEmployeesInSystemList /><br />
		<ShowEmployeesInDeptList /><br />
		<ShowLoading />
		<ShowMessage />
	</div>
);

export default MainFrame;
