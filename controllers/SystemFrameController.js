/**
 * 系統主體架構之controllers
 * @module controllers/SystemFrameController
 */

"use strict";

/**
 * 登入
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.login = async (req, res, next) => {

	try{

		const axios = require("axios");
		const utility = require ("../helper/Utility");
		const config = require("../Config");
		const systemInformation = require("../helper/SystemInformation");
		const error =  require("../helper/CustodianWebError");

		const local = 	config[process.env.NODE_ENV].backend.policy + "://" + 
						config[process.env.NODE_ENV].backend.host + ":" + 
						config[process.env.NODE_ENV].backend.port;
		
		// get new data:
		const [userProfile, ] = await axios.all([ 
			axios.post(	local + "/api/staff/users/login", {
				"data": { "account": req.body.account, "password": req.body.password,}, 
				"requester": req.user_profile.user,
				"token": req.cookies.custodianweb_access_token,
				"system": "CustodianWeb",
			}), 
		]);
		
		req.user_profile = {
			"login": false,
			"user": "",
			"user_name": "",
			"dept": "",
			"dept_name": "",
			"permission_list": [],	
			"product_list":	[],		
			"role_list": [],			
			"system": "",			
		};
		
		switch (userProfile.data.code.type+""){

		case "INFO":
			// show result
			utility.showAlterEJSHandler(req, res, userProfile.data.code);

			// set data
			if( userProfile.data.data.system === "CustodianWeb" ){
				//set access token in cookie
				res.cookie("custodianweb_access_token", userProfile.data.data.access_token, { 
					httpOnly: config[process.env.NODE_ENV].cookie.httpOnly, 
					secure: config[process.env.NODE_ENV].cookie.secure 
				});

				// set user profile
				req.user_profile = userProfile.data.data;
				req.user_profile.login = "true";
				req.user_profile.permission_list = utility.getNavbarPermission(userProfile.data.data.permission_list);
			}
			//[TODO]: should show message ? 
			break;

		case "ERROR":
			// show result
			utility.showAlterEJSHandler(req, res, userProfile.data.code);
				
			break;

		default:
			throw new error.InternalServerError();
		}

		//render page
		res.render("home", { 
			"title": systemInformation.getSystemTitle(),
			"page_title": "Home",
			"user_profile" : req.user_profile
		});

	}catch(e){ next(e); }
};

/**
 * 登出controller
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.logout = (req, res, next) => {

	try{
		const systemInformation = require("../helper/SystemInformation");
		const utility = require ("../helper/Utility");
		
		/* delete session data */
		// req.session.destroy();
		res.clearCookie("custodianweb_access_token");
		// res.cookie("custodianweb_access_token","");	// clean token

		/* show popups */
		utility.showAlterEJSHandler(req, res, { type:"INFO", message:"登出成功", });

		/* redirect to home */
		res.render("home",  { 
			"title": systemInformation.getSystemTitle(),
			"page_title": "",
			"user_profile": {
				"login": false,
				"user": "",
				"user_name": "",
				"dept": "",
				"dept_name": "",
				"permission_list": [],	
				"product_list":	[],		
				"role_list": [],			
				"system": "", 
			},
		});
	}catch(e){ next(e); }   
};

/**
 * 主頁面controller
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports.home = (req, res, next) => {
	try{
		const systemInformation = require("../helper/SystemInformation");

		res.render("home", { 
			"title": systemInformation.getSystemTitle(),
			"page_title": "Home",
			"user_profile" : req.user_profile
		});
	}catch(e){ next(e); }
};
