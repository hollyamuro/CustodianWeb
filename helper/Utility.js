/**
 * 共用程式 & middleware
 * @module helper/Utility
 */

"use strict";

// /**
//  * 設定session參數
//  * @param  {Object} session session物件
//  */
// module.exports.sessionConfigureHandler = (session)=>{

// 	const uuidV1 = require("uuid/v1");
// 	const config = require("../Config");
    
// 	let sessionProps = {
// 		secret: uuidV1() + uuidV1(),  //recommand 128 bytes random string
// 		resave: false,
// 		saveUninitialized: false,
// 		cookie: { 
// 			maxAge: 4 * 60 * 60 * 1000,		// 4 hours
// 			httpOnly: config[process.env.NODE_ENV].cookie.httpOnly, 
// 			secure: config[process.env.NODE_ENV].cookie.secure, 
// 		}  
// 	};

// 	switch(config[process.env.NODE_ENV].default_session_database.toString().trim()){
// 	case "redis":{
// 		const redis = require("connect-redis")(session);
// 		sessionProps.store = new redis(config[process.env.NODE_ENV].redis);
// 		break;
// 	}
// 	case "mongodb": {
// 		const mongodb = require("connect-mongo")(session);
// 		sessionProps.store = new mongodb(config[process.env.NODE_ENV].mongodb);
// 		break;
// 	}
// 	default:
// 		//throw error here
// 		process.exit(1);
// 	}

// 	return sessionProps;
// };

/**
 * 取得系統資訊
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports.systemInfoHandler = async (req, res, next) => {
	const systemInformation = require("../helper/SystemInformation");

	res.locals.version = "";
	res.locals.remote_version = "";
	try {

		res.locals.version = systemInformation.getSystemVersion();
		res.locals.remote_version = await systemInformation.getRemoteSystemVersion();
		next();

	} catch (e) {
		next(e);
	}
};

/**
 * 顯示彈跳視窗， 因為是使用locals設定請配合EJS template使用。
 * @param  {String} alterType
 * @param  {String} alterMsg
 * @see ...
 */
module.exports.showAlterEJSHandler = (req, res, alterMsg) => {
	res.locals.show_popup = true;
	res.locals.popup = { type: alterMsg.type, message: alterMsg.message, };
};

/**
 * 取得權限列表
 * @param  {Object} premissionList
 */
module.exports.getNavbarPermission = (permissionList) => {
	
	const systemHierarchy = require("./SystemHierarchy");
	// return systemHierarchy;

	let structPermission = {};
	for(let i=0; i<permissionList.length; i++){
		
		let sys = permissionList[i].System_Id;
		let dir = permissionList[i].Directory_Id;
		let fun = permissionList[i].Function_Id;
		let auth = permissionList[i].Auth;

		if(	!systemHierarchy.hasOwnProperty(sys) ||
			!systemHierarchy[sys].hasOwnProperty(dir) ||
			!systemHierarchy[sys][dir].hasOwnProperty(fun))
			continue;
			
		if(!structPermission.hasOwnProperty(sys)){
			structPermission[sys] = {
				name: systemHierarchy[sys].name,
			};
		}

		if(!structPermission[sys].hasOwnProperty(dir)){
			structPermission[sys][dir] = {
				name: systemHierarchy[sys][dir].name,
			};
		}

		if(!structPermission[sys][dir].hasOwnProperty(fun)){
			structPermission[sys][dir][fun] = {
				name: systemHierarchy[sys][dir][fun].name,
				url: systemHierarchy[sys][dir][fun].url,
				auth: auth,
			};
		}
	}

	return structPermission;
};

/**
 * 檢查輸入資料
 * @param  {Object} inputdata
 */
module.exports.checkInputData = async(inputdata) => 
{

	try
	{
		const debug = require("debug")("CustodianWeb:Utility.checkInputData");
		const InputDataRegexp = /['"/*\\]/;
		return new Promise( (resolve, reject ) => {
			Object.keys(inputdata).forEach(element => {
				debug(inputdata[element]);
				if(typeof(inputdata[element])==="number"){
                    inputdata[element] = inputdata[element].toString();
				}

				if(typeof(inputdata[element])==="object"){
                    for(let i=0; i<inputdata[element].length;i++){
                        if(inputdata[element][i].search(InputDataRegexp) >= 0){
							resolve(false);
                        }
                    }
                }
                else{
                    if(inputdata[element].search(InputDataRegexp) >= 0){
                        resolve(false);
                    }
				}
			
			});
			resolve(true);
		});
	}
	catch(err){
		throw(err);
	}
};