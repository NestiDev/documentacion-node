/* 
	$goTop: alamacena el elemento html con el ID go-top 
	keyGotop: alamacena el valor que retorna la consulta 
    hecha al localstorge
*/
let $goTop = document.querySelector("#go-top"),
    keyGotop = localStorage.getItem("gotop");

/* 
    generamos un evento scroll en el objeto windows
*/
window.addEventListener("scroll", () => {
    /* 
        si la altura en el eje Y es mayor a 50 
		al momento de ahcer scroll le añadimos a 
		$goTop la clase js_show_gotop definida 
		en la hoja de estilos
    */
    if (window.scrollY > 50) {
        $goTop.classList.add("js_show_gotop");

        /*
            si la condicion se cumple almacenamos en el localStorage
            la clave gotop con valor visible
        */
        localStorage.setItem("gotop", "visible");
    } else {
        /* 
			de lo contrario removemos de $goTop
			la clase js_show_gotop
		*/
        $goTop.classList.remove("js_show_gotop");

        /*
            de lo contrario removemos del localStorage la clave
        */
        localStorage.removeItem("gotop");
    }
});

/*
    ejecucion de la funcion footerGoTop
*/
let footerGoTop = () => {
    /* 
        implementamos scrollTo del objeto window 
		que recibe la propiedades top y left que nos 
        redirige a la parte inicial de la pagina y
        behavior que suavisa la subida
    */
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

/* 
	definimos un evento click en $goTop y declaramos una 
	funcion 
*/
$goTop.addEventListener("click", footerGoTop);

/*
    definimos un condicional 
*/
if (keyGotop === null) {
    /*
        si la condicion se cumple removemos de $goTop
        la clase js_show_gotop
    */
    $goTop.classList.remove("js_show_gotop");
} else {
    /*
        de lo contrario añadimos a $goTop
        la clase js_show_gotop
    */
    $goTop.classList.add("js_show_gotop");
}

/*
	exportacion de la funcion
*/
export { footerGoTop };
