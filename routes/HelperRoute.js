/**
 * 共用函式之route
 * @module routes/HelperRoute
 */

const HelperRoute = () => {
	const express = require("express");
	const router = express.Router();
	const HelperController = require("../controllers/HelperController");

	router.post("/user", HelperController.UserData);
	router.post("/system_permission_list", HelperController.getSystmePermissionList);
	router.post("/cust_system_permission_list", HelperController.getCustSystmePermissionList);
	router.post("/depts", HelperController.getDepts);
	router.post("/employeesInDept", HelperController.getEmployeesInDept);

	return router;

};

module.exports = HelperRoute();
