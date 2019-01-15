/**
 * 群組設定路由
 * @module routes/S099_system_management/C001_permission_management/F002_group_route
 */

"use strict";

module.exports = (() => {
	const express = require("express");
	const router = express.Router();
	const groupController = require("../../../controllers/S099_system_management/C001_permission_management/F002_group_controller");
	router.all("/", groupController.init);
	router.post("/create", groupController.create);
	router.post("/read", groupController.read);
	router.post("/update", groupController.update);
	router.post("/delete", groupController.delete);
	return router;
})();
