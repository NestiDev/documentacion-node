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
router.get("/start-node", (req, res) => {
	res.render("pages/start-node", {
		title: "iniciar con node",
	});
});

/* 
	______________________ express ______________________
*/
router.get("/express-install", (req, res) => {
	res.render("pages/express-install", {
		title: "intalacion de express",
	});
});

router.get("/express-server", (req, res) => {
	res.render("pages/express-server", {
		title: "servidor con express",
	});
});

/* 
	______________________ nodemon ______________________
*/
router.get("/nodemon", (req, res) => {
	res.render("pages/nodemon", {
		title: "nodemon node",
	});
});

router.get("/mysql-credenciales", (req, res) => {
	res.render("pages/mysql-credenciales", {
		title: "credenciales mysql node",
	});
});

/* 
	______________________ middlewares ______________________
*/
router.get("/json-middleware", (req, res) => {
	res.render("pages/json-middleware", {
		title: "json middleware",
	});
});

router.get("/url-middleware", (req, res) => {
	res.render("pages/url-middleware", {
		title: "url middleware",
	});
});

router.get("/cors-middleware", (req, res) => {
	res.render("pages/cors-middleware", {
		title: "cors middleware",
	});
});

router.get("/morgan-middleware", (req, res) => {
	res.render("pages/morgan-middleware", {
		title: "morgan middleware",
	});
});

/* 
	______________________ environments ______________________
*/
router.get("/environments", (req, res) => {
	res.render("pages/environments", {
		title: "environments node",
	});
});

/* 
	______________________ bcrypt ______________________
*/
router.get("/bcrypt", (req, res) => {
	res.render("pages/bcrypt", {
		title: "bcryptjs node",
	});
});

/* 
	______________________ jwt ______________________
*/
router.get("/jwt", (req, res) => {
	res.render("pages/jwt", {
		title: "jwt node",
	});
});

/* 
	______________________ exp-validator ______________________
*/
router.get("/exp-validator", (req, res) => {
	res.render("pages/exp-validator", {
		title: "exp-validator node",
	});
});

/* 
	______________________ nodemailer ______________________
*/
router.get("/nodemailer", (req, res) => {
	res.render("pages/nodemailer", {
		title: "nodemailer con node",
	});
});

/* 
	______________________ authenticate ______________________
*/
router.get("/authenticate", (req, res) => {
	res.render("pages/authenticate", {
		title: "authenticate node",
	});
});

/* 
	______________________ credenciales db ______________________
*/
router.get("/mongo-credenciales", (req, res) => {
	res.render("pages/mongo-credenciales", {
		title: "credenciales mongodb node",
	});
});

router.get("/mongo", (req, res) => {
	res.render("pages/mongo", {
		title: "mongodb con node",
	});
});

router.get("/schema", (req, res) => {
	res.render("pages/schema", {
		title: "schema mongodb con node",
	});
});

router.get("/auth-mongo", (req, res) => {
	res.render("pages/auth-mongo", {
		title: "auth mongodb con node",
	});
});

router.get("/crud-mongo", (req, res) => {
	res.render("pages/crud-mongo", {
		title: "crud mongodb con node",
	});
});

/* 
	______________________ mysql ______________________
*/
router.get("/mysql", (req, res) => {
	res.render("pages/mysql", {
		title: "mysql con node",
	});
});

router.get("/auth-mysql", (req, res) => {
	res.render("pages/auth-mysql", {
		title: "auth mysql con node",
	});
});

router.get("/crud-mysql", (req, res) => {
	res.render("pages/crud-mysql", {
		title: "crud mysql con node",
	});
});

/* 
	______________________ rutas ______________________
*/
router.get("/rutas", (req, res) => {
	res.render("pages/rutas", {
		title: "endpoints api node",
	});
});

/* 
	______________________ heroku  ______________________
*/
router.get("/heroku", (req, res) => {
	res.render("pages/heroku", {
		title: "heroku con node",
	});
});

/* 
	finalmente realizamos una exportacion del modulo
*/
module.exports = router;
