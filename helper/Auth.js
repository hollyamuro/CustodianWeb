/**
 * 系統權限控管
 * @module helper/Auth
 */

"use strict";

/**
 * 系統權限控管
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports = async (req, res, next) => {

	const debug = require("debug")("CustodianWeb:Auth");
	const systemInformation = require("../helper/SystemInformation");
	const utility = require ("../helper/Utility");

	try{
		const axios = require("axios");
		const config = require("../Config");
		const skipAuthUrls = require("./UrlPolicy");
		const requestUrl = req.url.split("?")[0];
		const local = config[process.env.NODE_ENV].backend.policy + "://" + config[process.env.NODE_ENV].backend.host + ":" + config[process.env.NODE_ENV].backend.port;

		if(!req.hasOwnProperty("user_profile")){
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
		}

		debug("*** FULL URL:" + req.protocol + "://" + req.get("host") + req.originalUrl );
		debug("*** Access URL:" + requestUrl);

		if(!req.cookies.custodianweb_access_token || req.cookies.custodianweb_access_token === undefined){
			if(skipAuthUrls.indexOf(requestUrl) > -1){
				next();
			}
			else{
				res.redirect("/");
				
			}
		}
		else{
			const jwt_user_profile = await axios.post(local + "/api/staff/users/verify",{ 
				"data":"", 
				"requester":req.user_profile.user,
				"token": req.cookies.custodianweb_access_token,
				"system": "CustodianWeb", 
			}); 
			res.cookie("custodianweb_access_token", jwt_user_profile.data.data.access_token, {
				httpOnly: config[process.env.NODE_ENV].cookie.httpOnly, 
					secure: config[process.env.NODE_ENV].cookie.secure 
			});
			switch(jwt_user_profile.data.code.type){
			case "INFO":
				req.user_profile = {
					"login": 				jwt_user_profile.data.data.login,
					"user": 				jwt_user_profile.data.data.user,
					"user_name": 			jwt_user_profile.data.data.user_name,
					"dept": 				jwt_user_profile.data.data.dept,
					"dept_name": 			jwt_user_profile.data.data.dept_name,
					"permission_list": 		utility.getNavbarPermission(jwt_user_profile.data.data.permission_list),
					"product_list":			jwt_user_profile.data.data.product_list,
					"role_list":			jwt_user_profile.data.data.role_list,
					"system":				jwt_user_profile.data.data.system,
				};
				if(skipAuthUrls.indexOf(requestUrl) > -1){
					next();
				}
				else if(requestUrl.substring(0, 7) === "/helper"){
					next();
				}
				else{
					let permission = req.user_profile.permission_list;
					let sys = requestUrl.substring(1, 5);
					let dir = requestUrl.substring(5, 9);
					let fun = requestUrl.substring(9, 13);

					if( permission.hasOwnProperty(sys) &&
							permission[sys].hasOwnProperty(dir) &&
							permission[sys][dir].hasOwnProperty(fun) ){
						next();
					}
					else{
						res.redirect("/");
					}
				}
				break;	
			case "ERROR":
				utility.showAlterEJSHandler(req, res, jwt_user_profile.data.code);
				res.clearCookie("custodianweb_access_token");
				// res.cookie("custodianweb_access_token","");
				res.render("home",  { 
					"title": systemInformation.getSystemTitle(),
					"page_title": "",
					"user_type": "",
					"user_profile": req.user_profile,
				});
				break;
			default:
				res.clearCookie("custodianweb_access_token");
				// res.cookie("custodianweb_access_token","");
				res.render("home",  { 
					"title": systemInformation.getSystemTitle(),
					"page_title": "",
					"user_type": "",
					"user_profile": req.user_profile,
				});
				break;
			}
		}
	}catch(err){
		next(err);
	}
};
