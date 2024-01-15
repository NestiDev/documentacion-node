/* 
	$showHiddenModal: almacena el elemento html con el ID show-modal
	$closeHiddenModal: almacena el elemento html con el ID show-hidden-modal
*/
let $showModal = document.querySelector("#show-modal"),
    $hiddenModal = document.querySelector("#hidden-modal");

/*
    ejecucion de la funcion sectionsShowModal
*/
let sectionsShowModal = () => {
    /* 
		seleccionamos $hiddenModal y le añadimos la
		clase js_show_hidden_modal
	*/
    $hiddenModal.classList.add("js_show_hidden_modal");

	/* 
		seleccionamos body y le añadimos la
		clase js_scroll_hidden 
	*/
	document.body.classList.add("js_scroll_hidden");
};

/*
    ejecucion de la funcion sectionsHiddenModal
*/
let sectionsHiddenModal = () => {
    /* 
		seleccionamos $hiddenModal y le removemos la
		clase js_show_hidden_modal
	*/
    $hiddenModal.classList.remove("js_show_hidden_modal");

	/* 
		seleccionamos body y le removemos la
		clase js_scroll_hidden 
	*/
	document.body.classList.remove("js_scroll_hidden");
};

/* 
	añadimos un evento click en la variable showModal
	y $hiddenModal 
*/
$showModal.addEventListener("click", sectionsShowModal);
$hiddenModal.addEventListener("click", sectionsHiddenModal);

/*
	exportacion de la funcion
*/
export { sectionsShowModal, sectionsHiddenModal };
