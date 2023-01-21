/* 
	router: almacena el requerimiento de express().Router
*/
let router = require("express").Router();

/* 
	haciendo uso del metodo get(), definimos el endpoint 
	de acceso seguido de una funcion de flecha que captura
	el requermiento del usuario y retorna una respuesta
*/
router.get("/", (req, res) => {
	/* 
		con el metodo render() definimos que vista va a
		renderizarse una vez el usuarrio haga un requerimiento
		a este enpoint, finalmente por medio de un objeto 
		pasamos el nombre de la vista
	*/
	res.render("pages/index", {
		title: "home",
	});
});

/* 
	______________________ start ______________________
*/
router.get("/start", (req, res) => {
	res.render("pages/start", {
		title: "start",
	});
});

/* 
	______________________ express ______________________
*/
router.get("/express-install", (req, res) => {
	res.render("pages/express-install", {
		title: "express-install",
	});
});

router.get("/express-server", (req, res) => {
	res.render("pages/express-server", {
		title: "express-server",
	});
});

/* 
	______________________ nodemon ______________________
*/
router.get("/nodemon", (req, res) => {
	res.render("pages/nodemon", {
		title: "nodemon",
	});
});

/* 
	______________________ middlewares ______________________
*/
router.get("/middlewares-urlencoded", (req, res) => {
	res.render("pages/middlewares-urlencoded", {
		title: "middlewares-urlencoded",
	});
});

router.get("/middlewares-json", (req, res) => {
	res.render("pages/middlewares-json", {
		title: "middlewares-json",
	});
});

router.get("/middlewares-cors", (req, res) => {
	res.render("pages/middlewares-cors", {
		title: "middlewares-cors",
	});
});

router.get("/middlewares-morgan", (req, res) => {
	res.render("pages/middlewares-morgan", {
		title: "middlewares-morgan",
	});
});

router.get("/middlewares-404", (req, res) => {
	res.render("pages/middlewares-404", {
		title: "middlewares-404",
	});
});

/* 
	______________________ ejs ______________________
*/
router.get("/ejs-install", (req, res) => {
	res.render("pages/ejs-install", {
		title: "ejs-install",
	});
});

router.get("/ejs-config", (req, res) => {
	res.render("pages/ejs-config", {
		title: "ejs-config",
	});
});

router.get("/ejs-partials", (req, res) => {
	res.render("pages/ejs-partials", {
		title: "ejs-partials",
	});
});

router.get("/ejs-variables", (req, res) => {
	res.render("pages/ejs-variables", {
		title: "ejs-variables",
	});
});

router.get("/ejs-condicionales", (req, res) => {
	res.render("pages/ejs-condicionales", {
		title: "ejs-condicionales",
	});
});

router.get("/ejs-ciclos", (req, res) => {
	res.render("pages/ejs-ciclos", {
		title: "ejs-ciclos",
	});
});

/* 
	______________________ environments ______________________
*/
router.get("/environments", (req, res) => {
	res.render("pages/environments", {
		title: "environments",
	});
});

/* 
	______________________ exp-validator ______________________
*/
router.get("/validations-exp-validator", (req, res) => {
	res.render("pages/validations-exp-validator", {
		title: "validations-exp-validator",
	});
});

router.get("/validations-querys", (req, res) => {
	res.render("pages/validations-querys", {
		title: "validations-querys",
	});
});

/* 
	______________________ bcryptjs ______________________
*/
router.get("/bcrypt-install", (req, res) => {
	res.render("pages/bcrypt-install", {
		title: "bcrypt-install",
	});
});

router.get("/bcrypt-hash", (req, res) => {
	res.render("pages/bcrypt-hash", {
		title: "bcrypt-hash",
	});
});

router.get("/bcrypt-compare", (req, res) => {
	res.render("pages/bcrypt-compare", {
		title: "bcrypt-compare",
	});
});

/* 
	______________________ jsonwebtoken ______________________
*/
router.get("/jsonwebtoken-install", (req, res) => {
	res.render("pages/jsonwebtoken-install", {
		title: "jsonwebtoken-install",
	});
});

router.get("/jsonwebtoken-sign", (req, res) => {
	res.render("pages/jsonwebtoken-sign", {
		title: "jsonwebtoken-sign",
	});
});

router.get("/jsonwebtoken-verify", (req, res) => {
	res.render("pages/jsonwebtoken-verify", {
		title: "jsonwebtoken-verify",
	});
});

/* 
	______________________ controllers ______________________
*/
router.get("/controllers", (req, res) => {
	res.render("pages/controllers", {
		title: "controllers",
	});
});

/*
	______________________ session ______________________
*/
router.get("/session-install", (req, res) => {
	res.render("pages/session-install", {
		title: "session-install",
	});
});

router.get("/session-variables", (req, res) => {
	res.render("pages/session-variables", {
		title: "session-variables",
	});
});

router.get("/session-destroy", (req, res) => {
	res.render("pages/session-destroy", {
		title: "session-destroy",
	});
});

/*
	______________________ flash ______________________
*/
router.get("/flash-install", (req, res) => {
	res.render("pages/flash-install", {
		title: "flash-install",
	});
});

router.get("/flash-messages", (req, res) => {
	res.render("pages/flash-messages", {
		title: "flash-messages",
	});
});

/* 
	______________________ mysql ______________________
*/
router.get("/mysql-credenciales", (req, res) => {
	res.render("pages/mysql-credenciales", {
		title: "mysql-credenciales",
	});
});

router.get("/mysql-connection", (req, res) => {
	res.render("pages/mysql-connection", {
		title: "mysql-connection",
	});
});

router.get("/mysql-routes", (req, res) => {
	res.render("pages/mysql-routes", {
		title: "mysql-routes",
	});
});

router.get("/mysql-auth", (req, res) => {
	res.render("pages/mysql-auth", {
		title: "mysql-auth",
	});
});

router.get("/mysql-crud", (req, res) => {
	res.render("pages/mysql-crud", {
		title: "mysql-crud",
	});
});

/* 
	______________________ mongoDB ______________________
*/
router.get("/mongodb-credenciales", (req, res) => {
	res.render("pages/mongodb-credenciales", {
		title: "mongoDB-credenciales",
	});
});

router.get("/mongodb-connect", (req, res) => {
	res.render("pages/mongodb-connect", {
		title: "mongoDB-connect",
	});
});

router.get("/mongodb-schema", (req, res) => {
	res.render("pages/mongodb-schema", {
		title: "mongoDB-schema",
	});
});

router.get("/mongodb-routes", (req, res) => {
	res.render("pages/mongodb-routes", {
		title: "mongoDB-routes",
	});
});

router.get("/mongodb-auth", (req, res) => {
	res.render("pages/mongodb-auth", {
		title: "mongoDB-auth",
	});
});

router.get("/mongodb-crud", (req, res) => {
	res.render("pages/mongodb-crud", {
		title: "mongoDB-crud",
	});
});

/* 
	______________________ nodemailer ______________________
*/
router.get("/nodemailer", (req, res) => {
	res.render("pages/nodemailer", {
		title: "nodemailer",
	});
});

/* 
	______________________ deploy  ______________________
*/
router.get("/deploy-vercel", (req, res) => {
	res.render("pages/deploy-vercel", {
		title: "deploy-vercel",
	});
});

router.get("/deploy-heroku", (req, res) => {
	res.render("pages/deploy-heroku", {
		title: "deploy-heroku",
	});
});

/* 
	finalmente realizamos una exportacion del modulo
*/
module.exports = router;
