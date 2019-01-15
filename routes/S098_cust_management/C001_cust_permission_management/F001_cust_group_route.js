/**
 * (客戶)群組設定路由
 * @module routes/S098_cust_management/C001_cust_permission_management/F001_cust_group_route
 */

"use strict";

const custGroupRoute = () => {
	const express = require("express");
	const router = express.Router();

	const custGroupController = 
		require("../../../controllers/S098_cust_management/C001_cust_permission_management/F001_cust_group_controller");
	
	router.all("/", custGroupController.init);
	
	router.post("/cust_groups/create", custGroupController.create);
	router.post("/cust_groups/read", custGroupController.read);
	router.post("/cust_groups/update", custGroupController.update);
	router.post("/cust_groups/delete", custGroupController.delete);
	
	return router;
};

module.exports = custGroupRoute();