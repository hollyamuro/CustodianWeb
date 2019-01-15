/**
 * 群組使用者設定路由
 * @module routes/S099_system_management/C001_permission_management/F003_group_user_route
 */

"use strict";

module.exports = (() => {
	
	const express = require("express");
	const router = express.Router();
	const groupUserController = require("../../../controllers/S099_system_management/C001_permission_management/F003_group_user_controller");
	router.all("/", groupUserController.init);
	router.all("/create", groupUserController.create);
	router.all("/read", groupUserController.read);
	router.all("/delete", groupUserController.delete);

	const groupController = require("../../../controllers/S099_system_management/C001_permission_management/F002_group_controller");
	router.post("/groups/read", groupController.read);

	const userController = require("../../../controllers/S099_system_management/C001_permission_management/F001_user_controller");
	router.post("/users/read", userController.read);

	return router;
})();