/**
 * 共用函式之controller
 * @module controllers/HelperController
 */

"use strict";

/**
 * 前端用取使用者資料
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.UserData = async (req, res, next) => {

	// const systemInformation = require("../helper/SystemInformation");
	const debug = require("debug")("CustodianWeb:HelperController.UserData");
	const config = require("../Config");
	const local = config[process.env.NODE_ENV].backend.policy + "://" + config[process.env.NODE_ENV].backend.host + ":" + config[process.env.NODE_ENV].backend.port;
	const axios = require("axios");

	try {
		const JwtUserProfile = await axios.post(local + "/api/staff/users/verify", { 
			"data": {}, 
			"requester": req.user_profile.user,
			"token": req.cookies.custodianweb_access_token,
			"system": "CustodianWeb",
		});

		const Data = {
			"user": JwtUserProfile.data.data.user,
			"user_name": JwtUserProfile.data.data.user_name,
			"dept": JwtUserProfile.data.data.dept,
			"dept_name": JwtUserProfile.data.data.dept_name,
		};

		res.send({ "code": { "type": "INFO", "message": "請求成功。", }, "data": Data });

	} catch (e) {
		debug(e.stack);
		next(e);
	}
};

/**
 * 取得後台系統權限列表
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.getSystmePermissionList = async (req, res, next) => {
	const debug = require("debug")("CustodianWeb:HelperController.getSystmePermissionList");
	try {
		const systemInformation = require("../helper/SystemInformation");
		res.send({ "code": { "type": "INFO", "message": "請求成功。", }, "data": systemInformation.getSystemHierarchyArrayList() });

	} catch (e) {
		debug(e.stack);
		next(e);
	}
};

/**
 * 取得前台系統權限列表
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.getCustSystmePermissionList = async (req, res, next) => {
	const debug = require("debug")("CustodianWeb:HelperController.getCustSystmePermissionList");
	try {
		const systemInformation = require("../helper/SystemInformation");
		res.send({ "code": { "type": "INFO", "message": "請求成功。", }, "data": systemInformation.getCustSystemHierarchyArrayList() });

	} catch (e) {
		debug(e.stack);
		next(e);
	}
};

/**取得部門列表
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.getDepts = async (req, res, next) => {
	try {
		const axios = require("axios");
		const config = require("../Config");
		const local = config[process.env.NODE_ENV].backend.policy + "://" +
			config[process.env.NODE_ENV].backend.host + ":" +
			config[process.env.NODE_ENV].backend.port;
		const result = await axios.post(local + "/api/staff/depts/read", { 
			"data": {}, 
			"requester": req.user_profile.user,
			"token": req.cookies.custodianweb_access_token,
			"system": "CustodianWeb",
		});
		res.send(result.data);

	} catch (e) { next(e); }
};

/**取得部門員工
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.getEmployeesInDept = async (req, res, next) => {
	try {
		const axios = require("axios");
		const config = require("../Config");
		const local = config[process.env.NODE_ENV].backend.policy + "://" +
			config[process.env.NODE_ENV].backend.host + ":" +
			config[process.env.NODE_ENV].backend.port;

		let result = await axios.post(local + "/api/staff/employees/read/valid_employees_in_dept", {
			"data": req.body.data,
			"requester": req.user_profile.user,
			"token": req.cookies.custodianweb_access_token,
			"system": "CustodianWeb",
		});
		
		res.send(result.data);

	} catch (e) { next(e); }
};

