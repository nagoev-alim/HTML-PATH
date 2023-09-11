/**VANILLA JAVASCRIPTS
 =================*/
window.addEventListener('load', function () {

    //MOBILE NAVBAR
    let bar_button = document.querySelector(".header_bar");
    let header_navigation = document.querySelector(".header_menu");
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

    } // END MOBILE NAVBAR

    let modal = document.querySelector('.feed_form');
    let modal_btn = document.querySelector('.show_button');
	if (modal_btn) {
		modal_btn.addEventListener('click', (e) => {
			e.preventDefault();
			modal.style.top = '31rem';
		});
		window.addEventListener("keydown", function (e) {
			if (e.keyCode === 27) {
				modal.style.top = '-2000rem';
			}
		})
	}

});// VANILLA JAVASCRIPTS


/**JQUERY SCRIPTS
 =================*/
$(document).ready(function () {
	if ($("#slider-range")) {
		$("#slider-range").slider({
			step: 50,
			range: true,
			min: 0,
			max: 5000,
			values: [0, 3000],
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
		})
	}

}); // END JQUERY SCRIPTS




