/**
 * 系統功能項架構
 * @module helper/SystemHierarchy
 */

"use strict";

module.exports = {
	"S001": {
		id: "S001",
		name: "固收託管庫存查詢系統",
		description: "",
		"C001": {
			id: "C001",
			name: "客戶管理",
			description: "",
			"F001": { id: "F001", name: "客戶狀態管理", description: "", url: "/S001C001F001", auth: "", sensitive: false, },
		},
	},

	"S098": {
		id: "S098",
		name: "客戶權限管理系統",
		description: "",
		"C001": {
			id: "C001",
			name: "客戶權限管理",
			description: "",
			"F001": { id: "F001", name: "客戶群組管理", description: "", url: "/S098C001F001", auth: "", sensitive: false, },
			"F002": { id: "F002", name: "客戶群組使用者管理", description: "", url: "/S098C001F002", auth: "", sensitive: false, },
			"F003": { id: "F003", name: "客戶群組權限(功能項)管理", description: "", url: "/S098C001F003", auth: "", sensitive: false, },
		},
	},

	"S099": {
		id: "S099",
		name: "權限管理系統",
		description: "",
		"C001": {
			id: "C001",
			name: "權限管理",
			description: "",
			"F001": { id: "F001", name: "使用者管理", description: "", url: "/S099C001F001", auth: "", sensitive: false, },
			"F002": { id: "F002", name: "群組管理", description: "", url: "/S099C001F002", auth: "", sensitive: false, },
			"F003": { id: "F003", name: "群組使用者管理", description: "", url: "/S099C001F003", auth: "", sensitive: false, },
			"F004": { id: "F004", name: "群組權限(功能項)管理", description: "", url: "/S099C001F004", auth: "", sensitive: false, },
		},
	},
};
