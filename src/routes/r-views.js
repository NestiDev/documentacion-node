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
	______________________ acceder ______________________
*/
router.get("/iniciar-node", (req, res) => {
	res.render("pages/iniciar-node", {
		title: "iniciar un proyecto node",
	});
});

/* 
	______________________ express ______________________
*/
router.get("/instalacion-express", (req, res) => {
	res.render("pages/instalacion-express", {
		title: "intalacion de express",
	});
});

router.get("/servidor-express", (req, res) => {
	res.render("pages/servidor-express", {
		title: "servidor de express",
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

/* 
	______________________ mongo db ______________________
*/
router.get("/mongo-credenciales", (req, res) => {
	res.render("pages/mongo-credenciales", {
		title: "credenciales mongodb node",
	});
});

router.get("/mysql-credenciales", (req, res) => {
	res.render("pages/mysql-credenciales", {
		title: "credenciales mysql node",
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
	______________________ environments ______________________
*/
router.get("/environments", (req, res) => {
	res.render("pages/environments", {
		title: "environments node",
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
	______________________ middlewares ______________________
*/
router.get("/middlewares", (req, res) => {
	res.render("pages/middlewares", {
		title: "middlewares node",
	});
});

/* 
	______________________ bcrypt ______________________
*/
router.get("/bcrypt", (req, res) => {
	res.render("pages/bcrypt", {
		title: "bcrypt node",
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
	______________________ authenticate ______________________
*/
router.get("/authenticate", (req, res) => {
	res.render("pages/authenticate", {
		title: "authenticate node",
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
	______________________ nodemailer ______________________
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
