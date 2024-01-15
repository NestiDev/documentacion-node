/* 
   $aLinks: almacena todos los elementos html tag-a que estan dentro de 
   1 tag-li que esta dentro de 1 tag-ul 
*/
let $aLinks = document.querySelectorAll("ul li a");

/*
    ejecucion de la funcion navabarActiveLink
*/
function navabarActiveLink() {
    /* 
        hacemos un recorrido forEach en $aLinks para remover de cada elemento
        la clase js_active_link definida en 'src/sass/style.scss' 
    */
    $aLinks.forEach((link) => link.classList.remove("js_active_link"));

    /* 
        añadimos la clase js_active_link definida en 'src/sass/style.scss' 
        al elemento seleccionado
    */
    this.classList.add("js_active_link");
}

/* 
    realizamos un recorrido forEach en $aLinks, pasamos un parametro
    (link) y definimos una funcion. generamos un evento CLICK
    al parametro (link) y pasamos la funcion previamente definida
*/
$aLinks.forEach((link) => link.addEventListener("click", navabarActiveLink));

/*
	exportacion de la funcion
*/
export { navabarActiveLink };
