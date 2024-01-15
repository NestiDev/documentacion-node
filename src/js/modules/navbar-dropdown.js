/* 
	$liDropdown: alamacena cada uno de los elementos html
	que tienen la clase li_dropdown.
*/
let $liDropdown = document.querySelectorAll(".li_dropdown");

/*
    ejecucion de la funcion navbarDropdown
*/
let navbarDropdown = function () {
    /* 
        si el recorrido hecho a cada elemento tiene la clase
        js_show_dropdown_menu que definimos en la hoja de estilo,
        la removemos...
    */
    if (this.classList.contains("js_show_dropdown_menu")) {
        this.classList.remove("js_show_dropdown_menu");
    } else {
        /* 
            de lo contrario hacemos un segundo recorrido forEach 
            a cada elemento para remover de drop2 la clase 
            js_show_dropdown_menu y haciendo uso del primer recorrido
            drop1 añadimos la clase js_show_dropdown_menu definida 
            en la hoja de estilos
        */
        $liDropdown.forEach((drop2) => drop2.classList.remove("js_show_dropdown_menu"));
        this.classList.add("js_show_dropdown_menu");
    }
};

/* 
	realizamos un recorridocon forEach por cada elemento y
    definimos un evento click en el elemento seleccionada
*/
$liDropdown.forEach((drop1) => drop1.addEventListener("click", navbarDropdown));

/*
	exportacion de la funcion
*/
export { navbarDropdown };
