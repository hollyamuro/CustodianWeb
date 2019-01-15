/**
 * 群組權限設定路由
 * @module routes/S099_system_management/C001_permission_management/F004_group_permission_route
 */

"use strict";

module.exports = (() => {
	const express = require("express");
	const router = express.Router();
	const groupPermissionController = require("../../../controllers/S099_system_management/C001_permission_management/F004_group_permission_controller");
	router.all("/", groupPermissionController.init);
	router.post("/create", groupPermissionController.create);
	router.post("/read", groupPermissionController.read);
	router.post("/delete", groupPermissionController.delete);

	const groupController = require("../../../controllers/S099_system_management/C001_permission_management/F002_group_controller");
	router.post("/groups/read", groupController.read);
	return router;
})();