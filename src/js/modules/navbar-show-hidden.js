/* 
	$headerMenuIcon: contiene el elemento HTML con ID header-menu-icon
	$menuNav: contiene el elemento HTML con ID menu-nav
*/
let $headerMenuIcon = document.querySelector("#header-menu-icon"),
    $menuNav = document.querySelector("#menu-nav");

/*
    ejecucion de la funcion navbarShowHidden
*/
let navbarShowHidden = function () {
    /*
		añadimos o removemos de $menuNav la clase js_show_navbar definida en
		./src/sass/style.scss
	*/
    $menuNav.classList.toggle("js_show_navbar");
};

/* 
	definimos un evento click en $headerMenuIcon y declaramos una 
	funcion 
*/
$headerMenuIcon.addEventListener("click", navbarShowHidden);

/*
	exportacion de la funcion
*/
export { navbarShowHidden };
