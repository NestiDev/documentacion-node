/* 
	express: alamacena el requerimiento del modulo express
	app: almacena los metodos express()
	port: almacena el puerto en el cual va a correr la aplicacion
	path: almacena el modulo path
*/
let express = require("express"),
	app = express(),
	port = process.env.PORT || 3000,
	path = require("path");

/* 
	routes: almacena el requerimiento del archivo donde estan
	definidas las rutas (endpoints) encargadas de entregar las
	diferentes vistas al usuario
*/
const routesViews = require("./src/routes/r-views");

/* 
	hacemos uso del metodo express.static() para enlazar nuestros
	archivos externos como los estilos css, las imagenes etc

	nota: es importante saber la ubicacion del archivo index.js
	ya que si este, esta dentro de la carpeta src definimos "./"  
	y si esta por fuera de la carpeta src definimos "src"
*/
app.use(express.static(path.join(__dirname, "./src")));

/* 
	primero configuramos el motor de plantilla usado para este
	proyecto. Finalmente haciendo uso del metodo path.join(), 
	definimos la ruta de las vistas

	nota: es importante saber la ubicacion del archivo index.js
	ya que si este, esta dentro de la carpeta src definimos "./views"  
	y si esta por fuera de la carpeta src definimos "src/views"
*/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

/* 
	hacemos uso de nuestras rutas
*/
app.use("", routesViews);

/* 
	hacemos uso del metodo listen() el cual recibe el puerto seguido
	de una funcion
*/
app.listen(port, (err) => {
	/*
		si la conexion es erronea mostramos el error por consola de lo
		contrario mostramos una conexion exitosa
	*/
	err ? console.log("conection error") : console.log("connection success");
});
