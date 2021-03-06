/**
 * 客戶群組權限管理Controller
 * @module controllers/S098_cust_management/C001_cust_permission_management/F003_cust_group_permission_controller
 */

"use strict";

/**
 * 畫面初始
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.init = async (req, res, next) => {
	try{

		const systemInformation = require("../../../helper/SystemInformation");

		// set page
		res.render("S098_cust_management/C001_cust_permission_management/F003_cust_group_permission", { 
			// default
			"title": systemInformation.getSystemTitle(),
			"page_title": systemInformation.getPageTitle(req.originalUrl),
			"user_profile" : req.user_profile,
			"auth": systemInformation.getPageAuth(req.user_profile.permission_list, req.originalUrl),
			// options
		});
		
	}catch(e){ next(e); }
};

/**
 * 讀取群組權限
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.read = async (req, res, next) => {
	try{
		const axios = require("axios");
		const config = require("../../../Config");
		const utility = require("../../../helper/Utility");
		const Error = require("../../../helper/CustodianWebError");
		const local = 	config[process.env.NODE_ENV].backend.policy + "://" + 
						config[process.env.NODE_ENV].backend.host + ":" +
						config[process.env.NODE_ENV].backend.port;
		let isInputDataVaild = await utility.checkInputData(req.body.data);
		if(isInputDataVaild){
			const result = await axios.post( local + "/api/staff/cust_group_permissions/read",{
				"data": req.body.data, 
				"requester": req.user_profile.user,
				"token": req.cookies.custodianweb_access_token,
				"system": "CustodianWeb",
			});
			res.send(result.data); 
		}else{
			throw new Error.BadRequest();
		}
	}catch(e){ next(e); }
};

/**
 * 新增群組權限
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.create = async (req, res, next) => {
	try{
		const axios = require("axios");
		const config = require("../../../Config");
		const utility = require("../../../helper/Utility");
		const Error = require("../../../helper/CustodianWebError");
		const local = 	config[process.env.NODE_ENV].backend.policy + "://" + 
						config[process.env.NODE_ENV].backend.host + ":" +
						config[process.env.NODE_ENV].backend.port;
		let isInputDataVaild = await utility.checkInputData(req.body.data);
		if(isInputDataVaild){
			const result = await axios.post( local + "/api/staff/cust_group_permissions/create",{
				"data": req.body.data, 
				"requester": req.user_profile.user,
				"token": req.cookies.custodianweb_access_token,
				"system": "CustodianWeb",
			});
			res.send(result.data); 
		}else{
			throw new Error.BadRequest();
		}
	}catch(e){ next(e); }
};

/**
 * 刪除群組權限
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.delete = async (req, res, next) => {
	try{
		const axios = require("axios");
		const config = require("../../../Config");
		const utility = require("../../../helper/Utility");
		const Error = require("../../../helper/CustodianWebError");
		const local = 	config[process.env.NODE_ENV].backend.policy + "://" + 
						config[process.env.NODE_ENV].backend.host + ":" +
						config[process.env.NODE_ENV].backend.port;
		let isInputDataVaild = await utility.checkInputData(req.body.data);
		if(isInputDataVaild){
			const result = await axios.post( local + "/api/staff/cust_group_permissions/delete",{
				"data": req.body.data,
				"requester": req.user_profile.user,
				"token": req.cookies.custodianweb_access_token,
				"system": "CustodianWeb",
			});
			res.send(result.data); 
		}else{
			throw new Error.BadRequest();
		}
	}catch(e){ next(e); }
};
