/* 
	$headerSearchIcon: contiene el elemento HTML con ID header-search-icon
    $inputHeaderSearch: almacena el elemento HTML con ID input-search
	$inputSearch: almacena todos los elementos HTML [type="search"]
	$tagLinks: almacena todos los elementos HTML tag-a que sean hijos directos de li_dropdown
	$lineNav: almacena todos los elementos HTML con CLASE line_nav
*/
let $headerSearchIcon = document.querySelector("#header-search-icon"),
    $inputHeaderSearch = document.querySelector("#input-search"),
    $inputSearch = document.querySelectorAll('[type="search"]'),
    $tagLinks = document.querySelectorAll(".menu_nav .li_dropdown > a"),
    $lineNav = document.querySelectorAll(".line_nav");

/*
    ejecucion de la funcion headerSearch
*/
let headerSearch = function () {
    /*
        agregamos o removemos de $inputHeaderSearch la
        clase js_input_hidden
    */
    $inputHeaderSearch.classList.toggle("js_input_hidden");

    /*
        containClassDarkMode: almacena true o false dependiendo si el elemento body tiene o no la clase js_dark_mode
		svgIconSearch: almacena el path del icono search
		svgIconX: almacena el path del icono equis
    */
    let containClassInputHidden = $inputHeaderSearch.classList.contains("js_input_hidden"),
        svgIconSearch = `<path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>`,
        svgIconX = `<path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>`;

    /*
        definimos un condicional que valida si $inputSearch 
		tiene la clase js_input_hidden de cumplirse la condicion
    */
    if (containClassInputHidden === true) {
        /*
            modificamos el contenido del $headerSearchIcon
        */
        $headerSearchIcon.innerHTML = svgIconX;
    } else {
        /*
            de lo contrario tambien modificamos el contenido
    		del $headerSearchIcon
        */
        $headerSearchIcon.innerHTML = svgIconSearch;
    }
};

/* 
	definimos un evento click en $headerSearchIcon y declaramos una 
	funcion 
*/
$headerSearchIcon.addEventListener("click", headerSearch);

$inputSearch.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        /*
            cancelamos el comportamiento por defecto del elemento
        */
        e.preventDefault();

        /*
            inputValue: almacena el valor ingresado en el input
            expRegInputValue: almacena la expresion regular generada
            a partir del valor ingresado en el input
        */
        let inputValue = e.target.value,
            expRegInputValue = new RegExp(inputValue, "i");

        /*
            realizamos un recorrido en $tagLinks
        */
        $tagLinks.forEach((link) => {
            /*
                link_TextContent: almacena el contenido textual de 
                cada tag-a
            */
            let link_TextContent = link.textContent;

            /*
                definimos un condicional que valida si el contenido
                textual de cada tag-a es igual al valor de la 
                expresion regular de cumplirse la condicion
            */
            if (expRegInputValue.test(link_TextContent) === true) {
                /*
                    removemos de cada tag-a la clase js_link_hidden
                */
                link.classList.remove("js_link_hidden");

                /*
                    realizamos un recorrido $lineNav
                */
                $lineNav.forEach((line) => {
                    /*
                        removemos de cada tag-hr la clase js_hidden_line_nav
                    */
                    line.classList.remove("js_hidden_line_nav");
                });
            } else {
                /*
                    de lo contrario añadimos la clase
                */
                link.classList.add("js_link_hidden");

                /*
                    realizamos un recorrido $lineNav
                */
                $lineNav.forEach((line) => {
                    /*
                        añadimos de cada tag-hr la clase js_hidden_line_nav
                    */
                    line.classList.add("js_hidden_line_nav");
                });
            }
        });
    });
});

/*
	exportacion de la funcion
*/
export { headerSearch };
