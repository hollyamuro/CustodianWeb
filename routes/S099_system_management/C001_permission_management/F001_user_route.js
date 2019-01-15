/**
 * 使用者設定路由
 * @module routes/S099_system_management/C001_permission_management/F001_user_route
 */

"use strict";

module.exports = (() => {
	const express = require("express");
	const router = express.Router();
	const userController = require("../../../controllers/S099_system_management/C001_permission_management/F001_user_controller");
	router.all("/", userController.init);
	router.all("/create", userController.create);
	router.all("/read", userController.read);
	router.all("/delete", userController.delete);
	return router;
})();