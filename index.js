/* 
	express: alamacena la importacion del modulo express
	path: almacena la importacion del modulo path
*/
import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

/* 
	app: almacena los metodos express()
	port: almacena el puerto en el cual va a correr la aplicacion
*/
let	app = express(),
	port = process.env.PORT || 3000,
	__dirname = dirname(fileURLToPath(import.meta.url));

/* 
	routes: almacena el requerimiento del archivo donde estan
	definidas las rutas (endpoints) encargadas de entregar las
	diferentes vistas al usuario
*/
import routesViews from "./src/routes/r-views.js";

/* 
	hacemos uso del metodo express.static() para enlazar nuestros
	archivos externos como los estilos css, las imagenes etc

	nota: es importante saber la ubicacion del archivo index.js
	ya que si este, esta dentro de la carpeta src definimos "./"  
	y si esta por fuera de la carpeta src definimos "src"
*/
app.use(express.static(join(__dirname, "./src")));

/* 
	primero configuramos el motor de plantilla usado para este
	proyecto. Finalmente haciendo uso del metodo path.join(), 
	definimos la ruta de las vistas

	nota: es importante saber la ubicacion del archivo index.js
	ya que si este, esta dentro de la carpeta src definimos "./views"  
	y si esta por fuera de la carpeta src definimos "src/views"
*/
app.set("view engine", "ejs");
app.set("views", join(__dirname, "./src/views"));

/* 
	hacemos uso de nuestras rutas
*/
app.use("", routesViews);


/* 
	ejecucion del servidor
*/
app.listen(port, () => {
	console.log(`server run on port ${port}!`);
});

// manejo del error cuando se levanta el servidor
app.on("error", (err) => {
	console.error("server bad construction", err);
});
