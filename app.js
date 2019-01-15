
/**
 * 封包處理
 * @module app
 */

"use strict";

/**
 * 封包處理
 */
const packageHandler = () => {

	const express = require("express");
	const path = require("path");
	const favicon = require("serve-favicon");
	const cookieParser = require("cookie-parser");
	const bodyParser = require("body-parser");
	// const session = require("express-session");

	const utility = require("./helper/Utility.js");

	let app = express();

	/* setup helmet*/
	app.use(require("helmet")());
	const uuid = require(`uuid`)
	app.use((req, res, next) => {
		res.locals.nonce = uuid.v4();
		next()
	});
	const helmet = require("helmet");
	app.use(helmet.contentSecurityPolicy({
		directives: {
			scriptSrc:		["'self'","'unsafe-eval'",(req, res) => `'nonce-${ res.locals.nonce }'`],
			imgSrc:			["'self'",'data:'],
			frameSrc:		["'self'"],
			fontSrc:		["'self'"],
		}
	}));
	app.use(helmet.frameguard({ action: 'deny' }));

	/* setup morgan for log*/
	const fileStreamRotator = require("file-stream-rotator");
	const morgan = require("morgan");

	let accessLogStream = fileStreamRotator.getStream({
		filename: "log/log-%DATE%.log",
		frequency: "daily",
		verbose: false
	});

	morgan.token("req-body", (req) => { return (req.url === "/") ? "" : JSON.stringify(req.body); });
	app.use(morgan(
		":remote-addr - :remote-user [:date[clf]] \":method :url HTTP/:http-version\" :status :res[content-length] \":referrer\" \":user-agent\" :req-body",
		{ stream: accessLogStream, })
	);
	
	// view engine setup
	app.set("views", path.join(__dirname, "views"));
	app.set("view engine", "ejs");

	// uncomment after placing your favicon in /public
	app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

	// include bootstraps
	app.use("/js", express.static(path.resolve(__dirname, "./node_modules/jquery/dist")));
	app.use("/js", express.static(path.resolve(__dirname, "./node_modules/popper.js/dist/")));
	app.use("/js", express.static(path.resolve(__dirname, "./node_modules/bootstrap/dist/js")));
	app.use("/css", express.static(path.resolve(__dirname, "./node_modules/bootstrap/dist/css")));

	// include bootstraps select
	app.use("/css", express.static(path.resolve(__dirname, "./node_modules/bootstrap-select/dist/css")));
	app.use("/js", express.static(path.resolve(__dirname, "./node_modules/bootstrap-select/dist/js")));

	/*system info setting*/
	app.use(utility.systemInfoHandler);

	/* Set session*/
	// app.use(session(utility.sessionConfigureHandler(session)));

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, "public")));

	/* Auth */
	app.use(require(path.resolve(__dirname, "./helper/Auth")));

	/* Routes */
	const routePolicy = require(path.resolve(__dirname, "./helper/RoutePolicy"));
	for (let i = 0; i < routePolicy.length; i++) {
		app.use(routePolicy[i].url, require(path.resolve(__dirname, "routes") + routePolicy[i].dir));
	}

	// catch 404 and forward to error handler
	app.use((req, res, next) => {
		const error = require("./helper/CustodianWebError");
		next(new error.NotFoundError());
	});

	// error handler
	app.use((err, req, res, next) => {

		const systemInformation = require("./helper/SystemInformation");
		const error = require("./helper/CustodianWebError");

		// set locals, only providing error in development
		// res.locals.message = (err.message) ? err.message : new error.InternalServerError().message;
		res.locals.message = new error.InternalServerError().message;
		res.locals.error = req.app.get("env") !== "production" ? err : {};

		// render the error page
		res.status(err.status || new error.InternalServerError().status).render("error", {
			"title": systemInformation.getSystemTitle(),
			"page_title": "Error",
			"user_profile": req.user_profile
		});
	});

	return app;
};

module.exports = packageHandler();
