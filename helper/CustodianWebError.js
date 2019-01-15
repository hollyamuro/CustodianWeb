/**
 * 系統錯誤處理
 * @module helper/CustodianWebError
 * @see reference: https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status
 */

"use strict";

/* Basic error format */
class CustodianWebError extends Error {
	constructor(message, type, status) {
		super(message);
                
		this.name = this.constructor.name;
		this.type = type;
		this.status = status;

		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports.SignInFail = class extends CustodianWebError {
	constructor(message) { super(message || "ERROR_SIGN_IN_FAIL", "ERROR", 403); }
};

module.exports.BadRequest = class extends CustodianWebError {
	constructor(message) { super(message || "ERROR_BAD_REQUEST", "ERROR", 400); }
};

module.exports.Unauthorized = class extends CustodianWebError {
	constructor(message) { super(message || "ERROR_UNAUTHORIZED", "ERROR", 401); }
};

module.exports.Forbidden = class extends CustodianWebError {
	constructor(message) { super(message || "ERROR_FORBIDDEN", "ERROR", 403); }
};

module.exports.NotFoundError = class extends CustodianWebError {
	constructor(message) { super(message || "ERROR_NOT_FOUND", "ERROR", 404); }
};

module.exports.InternalServerError = class extends CustodianWebError {
	constructor(message) { super(message || "ERROR_INTERNAL_SERVER_ERROR", "ERROR", 500); }
};
