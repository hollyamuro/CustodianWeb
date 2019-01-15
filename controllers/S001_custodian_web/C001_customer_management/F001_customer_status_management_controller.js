/**
 * 客戶基本資料更新排程Controller
 * @module controllers/S001_custodian_web/C001_customer_management/F001_customer_status_management_controller
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
		res.render("S001_custodian_web/C001_customer_management/F001_customer_status_management", { 
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
 * 匯入客戶
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.importCust = async (req, res, next) => {
	try{
		const axios = require("axios");
		const config = require("../../../Config");
		const local = 	config[process.env.NODE_ENV].backend.policy + "://" + 
						config[process.env.NODE_ENV].backend.host + ":" +
						config[process.env.NODE_ENV].backend.port;
		const result = await axios.post( local + "/api/staff/custs/import",{
			"data":{}, 
			"requester": req.user_profile.user,
			"token": req.cookies.custodianweb_access_token,
			"system": "CustodianWeb",
		});
		res.send(result.data); 

	}catch(e){ next(e); }
};

/**
 * 讀取客戶列表
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.readCust = async (req, res, next) => {
	try{
		const axios = require("axios");
		const config = require("../../../Config");
		const local = 	config[process.env.NODE_ENV].backend.policy + "://" + 
						config[process.env.NODE_ENV].backend.host + ":" +
						config[process.env.NODE_ENV].backend.port;
		const result = await axios.post( local + "/api/staff/custs/read",{
			"data":{}, 
			"requester": req.user_profile.user,
			"token": req.cookies.custodianweb_access_token,
			"system": "CustodianWeb",
		});
		res.send(result.data); 

	}catch(e){ next(e); }
};

/**
 * 寄送邀請函
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.sendInviteMail = async (req, res, next) => {
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
			const result = await axios.post( local + "/api/staff/custs/invite",{
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
 * 寄送密碼函
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.sendPasswordMail = async (req, res, next) => {
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
			const result = await axios.post( local + "/api/staff/custs/reset_password",{
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