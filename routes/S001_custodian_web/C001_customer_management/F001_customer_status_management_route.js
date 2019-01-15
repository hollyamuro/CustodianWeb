/**
 * 客戶基本資料更新排程設定路由
 * @module routes/S001_custodian_web/C001_customer_management/F001_customer_status_management_route
 */

"use strict";

const customerStatusManagementRoute = () => {
	
	const express = require("express");
	const router = express.Router();
	const customerStatusManagementController = require("../../../controllers/S001_custodian_web/C001_customer_management/F001_customer_status_management_controller");
	router.all("/", customerStatusManagementController.init);
	router.post("/custs/import", customerStatusManagementController.importCust);
	router.post("/custs/read", customerStatusManagementController.readCust);
	router.post("/custs/invite", customerStatusManagementController.sendInviteMail);
	router.post("/custs/reset_password", customerStatusManagementController.sendPasswordMail);
	
	return router;
};

module.exports = customerStatusManagementRoute();