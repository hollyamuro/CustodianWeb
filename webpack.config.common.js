module.exports = {

	entry: {	
		polyfill: "./src/Polyfill",
		
		customer_management_list: "./src/CustomerManagementListRender",
		customer_group_management_list: "./src/CustomerGroupManagementListRender",
		customer_group_user_management_list: "./src/CustomerGroupUserManagementListRender",
		customer_group_permission_management_list: "./src/CustomerGroupPermissionManagementListRender",

		user_management_list: "./src/UserManagementListRender",
		user_group_management_list: "./src/UserGroupManagementListRender",
		user_group_user_management_list: "./src/UserGroupUserManagementListRender",
		user_group_permission_management_list: "./src/UserGroupPermissionManagementListRender",
	},
	output: {
		path: `${__dirname}/public/dist`,
		filename: "[name]_bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader",
			},
			{
				test: /\.css$/,
				loader:   "css-loader",
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: "initial",
			name: "vendors",
			cacheGroups: {
				vendors: {
					test: /node_modules\//,
				},
			}
		}
	},
};