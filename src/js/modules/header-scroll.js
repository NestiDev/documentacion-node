/* 
	$headerComponent: contiene el elemento HTML con ID header-component
*/
let $headerComponent = document.querySelector("#header-component");

/*
    ejecucion de la funcion headerScroll
*/
let headerScroll = function () {
    /* 
        scrollYValue: almacena el valor que se genera cuando 
        se hace scroll en el eje-Y 
    */
    let scrollYValue = window.scrollY;

    /*
		si el valor del scroll es mayor a 0, añadimos a 
		$headerComponent la clase js_header_scroll definida 
		en ./src/sass/style.scss
	*/
    if (scrollYValue > 0) {
        $headerComponent.classList.add("js_header_scroll");
    } else {
        /* 
            de lo contrario removemos de $headerComponent 
            la clase js_header_scroll
        */
        $headerComponent.classList.remove("js_header_scroll");
    }
};

/* 
	definimos un evento scroll en window y declaramos una 
	funcion 
*/
window.addEventListener("scroll", headerScroll);

/*
	exportacion de la funcion
*/
export { headerScroll };
