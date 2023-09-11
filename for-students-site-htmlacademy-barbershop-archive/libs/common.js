/**VANILLA JAVASCRIPTS
 =================*/
window.addEventListener('load', function () {

	//MOBILE NAVBAR
	let bar_button = document.querySelector(".header_bar");
	let header_navigation = document.querySelector(".header_menu_in");
	let menuLinks = header_navigation.querySelectorAll("a");
	bar_button.addEventListener("click", function (event) {
		event.preventDefault();
		this.classList.toggle("bar_open");
		header_navigation.classList.toggle("menu_open");
	});
	for (let i = 0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener("click", function () {
			bar_button.classList.remove("bar_open");
			header_navigation.classList.remove("menu_open");
		})

	}; // END MOBILE NAVBAR



	/**
	 * MODAL
	 ****/
	var overlay = document.querySelector('.overlay');
	var modal = document.querySelector('.modal');
	var modal_call = document.querySelector(".modal_btn");
	var modal_exit = document.querySelector(".modal_exit");
	var login_input = document.querySelector("input[type=text]");
	/////////////////////////////////////////////////////////
	var modal_map = document.querySelector('.modal_map');
	var map_call_btn = document.querySelector('.find');
	var modal_map_exit = modal_map.querySelector(".map_exit");
	//////////////////////////////////////////////////////////
	modal_call.addEventListener('click', function (e) {
		e.preventDefault();
		overlay.style.display = "block";
		modal.classList.add('modal_show');
		login_input.focus();
	});

	modal_exit.addEventListener('click', function (e) {
		e.preventDefault();
		overlay.style.display = "none";
		modal.classList.remove('modal_show');
	});
	///////////////////////////////////////////////////
	map_call_btn.addEventListener('click', function (e) {
		e.preventDefault();
		overlay.style.display = "block";
		modal_map.classList.add('modal_show');
	});

	modal_map_exit.addEventListener('click', function (e) {
		e.preventDefault();
		overlay.style.display = "none";
		modal_map.classList.remove('modal_show');
	});
	window.addEventListener("keydown", function (e) {
		if (e.keyCode === 27) {
			overlay.style.display = "none";
			modal.classList.remove("modal_show");
			modal_map.classList.remove("modal_show");
		}
	})



	/**
	 * SIEMA
	 ****/

	var mySiema = new Siema();
	var prev = document.querySelector('.prev');
	var next = document.querySelector('.next');

	prev.addEventListener('click', function () {
		return mySiema.prev();
	});
	next.addEventListener('click', function () {
		return mySiema.next();
	});


}); // VANILLA JAVASCRIPTS
