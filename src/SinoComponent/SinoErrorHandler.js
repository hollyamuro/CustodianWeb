/**
 * client-side 錯誤處理
 * @module /src/helper/ReactErrorHander
 * @see reference: https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status
 * */

"use strict";

/* Basic error format */
class SinoError extends Error {
	constructor(message, type, status) {
		super(message);
                
		this.name = this.constructor.name;
		this.type = type;
		this.status = status;
	}
}

export const Unauthorized = class extends SinoError {
	constructor(message) { super(message || "資源未授權，請先登入。", "ERROR", 401); }
};

export const Forbidden = class extends SinoError {
	constructor(message) { super(message || "資源禁止存取。", "ERROR", 403); }
};

export const NotFound = class extends SinoError {
	constructor(message) { super(message || "資源不存在。", "ERROR", 404); }
};

export const InternalServerError = class extends SinoError {
	constructor(message) { super(message || "內部服務器錯誤，請洽資訊人員。", "ERROR", 500); }
};
