/**
 * 系統路由架構
 * @module helper/RoutePolicy
 */

"use strict";

module.exports = [
	/*URL <=> PHYSICAL PAGE*/

	/* 系統框架 */
	{ url: "/",                 	dir: "/SystemFrameRoute"},

	/* 其他系統資訊 */
	{ url: "/helper",               dir: "/HelperRoute"},
 
	/*固收託管庫存查詢系統*/
	{ url: "/S001C001F001",         dir: "/S001_custodian_web/C001_customer_management/F001_customer_status_management_route"},

	/* 客戶權限管理 */
	{ url: "/S098C001F001",         dir: "/S098_cust_management/C001_cust_permission_management/F001_cust_group_route"},
	{ url: "/S098C001F002",         dir: "/S098_cust_management/C001_cust_permission_management/F002_cust_group_user_route"},
	{ url: "/S098C001F003",         dir: "/S098_cust_management/C001_cust_permission_management/F003_cust_group_permission_route"},
	
	/* 系統權限管理 */
	{ url: "/S099C001F001",         dir: "/S099_system_management/C001_permission_management/F001_user_route"},
	{ url: "/S099C001F002",         dir: "/S099_system_management/C001_permission_management/F002_group_route"},
	{ url: "/S099C001F003",         dir: "/S099_system_management/C001_permission_management/F003_group_user_route"},
	{ url: "/S099C001F004",         dir: "/S099_system_management/C001_permission_management/F004_group_permission_route"},

	// /*Add New Route Here:...*/	
];

