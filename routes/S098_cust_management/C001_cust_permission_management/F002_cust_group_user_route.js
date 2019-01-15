/**
 * (客戶)群組使用者設定路由
 * @module routes/S098_cust_management/C001_cust_permission_management/F002_cust_group_user_route
 */

"use strict";

const custGroupUserRoute = () => {
	const express = require("express");
	const router = express.Router();

	const custGroupUserController = 
		require("../../../controllers/S098_cust_management/C001_cust_permission_management/F002_cust_group_user_controller");
	router.all("/", custGroupUserController.init);
	router.post("/cust_group_users/read", custGroupUserController.read);
	router.post("/cust_group_users/create", custGroupUserController.create);
	router.post("/cust_group_users/delete", custGroupUserController.delete);
	
	const custGroupController = 
		require("../../../controllers/S098_cust_management/C001_cust_permission_management/F001_cust_group_controller");
	router.post("/cust_groups/read", custGroupController.read);
	
	const customerStatusManagementController = 
		require("../../../controllers/S001_custodian_web/C001_customer_management/F001_customer_status_management_controller");
	router.post("/custs/read", customerStatusManagementController.readCust);

	return router;
};

module.exports = custGroupUserRoute();