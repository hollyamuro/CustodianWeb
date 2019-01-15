/**
 * (客戶)群組權限設定路由
 * @module routes/S098_cust_management/C001_cust_permission_management/F003_cust_group_permission_route
 */

"use strict";

const custGroupPermissionRoute = () => {
	const express = require("express");
	const router = express.Router();

	const custGroupPermissionController = 
        require("../../../controllers/S098_cust_management/C001_cust_permission_management/F003_cust_group_permission_controller");
	router.all("/", custGroupPermissionController.init);
	router.post("/custs_group_permissions/read", custGroupPermissionController.read);
	router.post("/custs_group_permissions/create", custGroupPermissionController.create);
	router.post("/custs_group_permissions/delete", custGroupPermissionController.delete);

	const custGroupController = 
		require("../../../controllers/S098_cust_management/C001_cust_permission_management/F001_cust_group_controller");
	router.post("/cust_groups/read", custGroupController.read);
	
	return router;
};

module.exports = custGroupPermissionRoute();