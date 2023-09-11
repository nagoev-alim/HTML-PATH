/**VANILLA JAVASCRIPTS
 =================*/
window.addEventListener('load', function () {

	/****
	 * MOBILE NAVBAR
	 ****/
	let bar_button = document.querySelector(".mobile_bar");
	let header_navigation = document.querySelector(".mobile_menu");
	let menuLinks = header_navigation.querySelectorAll("a");
	bar_button.addEventListener("click", function (event) {
		event.preventDefault();
		this.classList.toggle("mobile_bar_open");
		header_navigation.classList.toggle("mobile_state_open");
	});
	for (let i = 0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener("click", function () {
			bar_button.classList.remove("mobile_bar_open");
			header_navigation.classList.remove("mobile_state_open");
		})
	};
	/****
	 * MODALS
	 ****/
	let modal_btn = document.querySelector(".modal_btn");
	let modal = document.querySelector(".modal");
	let modals_overlay = document.querySelector(".modals_overlay");
	let modal_exit = modal.querySelector(".modal_exit");
	let modal_map_btn = document.querySelector(".mini_map");
	let modal_map = document.querySelector(".modal_map");
	let modal_map_exit = modal_map.querySelector(".modal_map_exit");
	// events
	modal_btn.addEventListener("click", (e) => {
		e.preventDefault();
		modals_overlay.style.display = "block";
		modal.style.transform = "translate(-50%, -50%)";
	});
	modal_map_btn.addEventListener("click", (e) => {
		e.preventDefault();
		modals_overlay.style.display = "block";
		modal_map.style.transform = "translate(-50%, -50%)";
	});
	modal_exit.addEventListener("click", (e) => {
		e.preventDefault();
		modals_overlay.style.display = "none";
		modal.style.transform = "translate(-50%, -200rem)";
	});
	modal_map_exit.addEventListener("click", (e) => {
		e.preventDefault();
		modals_overlay.style.display = "none";
		modal_map.style.transform = "translate(-50%, -200rem)";
	});
	/****
	 * TABS
	 ****/
	// varisables
	let tab_contents = document.querySelectorAll(".tabcontent");
	let tab_buttons = document.querySelectorAll(".tablinks");
	// events
	for (let i = 0; i < tab_buttons.length; i++) {
		tab_buttons[i].addEventListener("click", (e) => {
			for (const btn of tab_buttons) {
				btn.className = btn.className.replace(" active", "");
			}
			for (const content of tab_contents) {
				content.style.display = content.style.replace = ("flex", "none");
			}
			e.currentTarget.className += " active";
			tab_contents[i].style.display = "flex";
		});
	}
	//default clicked element
	document.getElementById("defaultOpen").click();

}); // VANILLA JAVASCRIPTS




/**JQUERY SCRIPTS
 =================*/
$(document).ready(function () {

	$('.device_carousel').owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		nav: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
				dots: false
			},
			576: {
				items: 1,
				dots: false
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});
	// UI SLIDER
	$("#slider-range").slider({
		step: 50,
		range: true,
		min: 0,
		max: 30000,
		values: [0, 15000],
		slide: function (event, ui) {
			$("#amount_min").val(ui.values[0]);
			$("#amount_max").val(ui.values[1]);
		}
	});
	$("#amount_min").val($("#slider-range").slider("values", 0));
	$("#amount_max").val($("#slider-range").slider("values", 1));
	// Изменение местоположения ползунка при вводиде данных в первый элемент input
	$("input#amount_min").change(function () {
		var value1 = $("input#amount_min").val();
		var value2 = $("input#amount_max").val();
		if (parseInt(value1) > parseInt(value2)) {
			value1 = value2;
			$("input#amount_min").val(value1);
		}
		$("#slider-range").slider("values", 0, value1);
	});

	// Изменение местоположения ползунка при вводиде данных в второй элемент input 	
	$("input#amount_max").change(function () {
		var value1 = $("input#amount_min").val();
		var value2 = $("input#amount_max").val();

		if (parseInt(value1) > parseInt(value2)) {
			value2 = value1;
			$("input#amount_max").val(value2);
		}
		$("#slider-range").slider("values", 1, value2);
	});
	// Фильтр
	$("#amount_min,#amount_max").keypress(function (event) {
		var key, keyChar;
		if (!event) var event = window.event;

		if (event.keyCode) key = event.keyCode;
		else if (event.which) key = event.which;

		if (key == null || key == 0 || key == 8 || key == 13 || key == 46 || key == 37 || key == 39)
			return true;
		keyChar = String.fromCharCode(key);

		if (!/\d/.test(keyChar)) return false;
	}) //UI END



}); // END JQUERY SCRIPTS
