/*********************************************
 *START #VANILLA SCRIPTS
 *********************************************/
window.addEventListener('load', function () {
	/*********************************************
	 *START #MOBILE NAVBAR
	 *********************************************/
	let bar_button = document.querySelector(".haeder_bar");
	let header_navigation = document.querySelector(".mobile_list");
	let menuLinks = header_navigation.querySelectorAll("a");
	bar_button.addEventListener("click", function (event) {
		event.preventDefault();
		this.classList.toggle("bar_open");
		header_navigation.classList.toggle("mobile_open");
	});
	for (let i = 0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener("click", function () {
			bar_button.classList.remove("bar_open");
			header_navigation.classList.remove("mobile_open");
		})
	};
	/*********************************************
	 *END #MOBILE NAVBAR
	 *********************************************/

	/*********************************************
	 *START #MODAL
	 *********************************************/
	let modal_callback = document.querySelector('.modal_callback');
	let modal_overlay = document.querySelector('.modal_overlay');
	let modal = modal_overlay.querySelector('.modal');
	let modal_exit = modal.querySelector('.modal_exit')
	//events - open modal
	modal_callback.addEventListener('click', (e) => {
		modal_overlay.style.display = 'block';
		modal.style.transform = 'translate(-50%, -50%)';
	});
	//events - close modal
	modal_exit.addEventListener('click', (e) => {
		modal_overlay.style.display = 'none';
		modal.style.transform = 'translate(-50%, -200rem)';
	});
	/*********************************************
	 *END #MODAL
	 *********************************************/

	/*********************************************
	 *START #YANDEX MAP
	 *********************************************/
	ymaps.ready(init); // вызов функции
	//events
	function init() { // определение функции 
		var map = new ymaps.Map('map', { //создаем новый конструктор для карты
			center: [59.9386, 30.3231], //определяем центр карты (http://webmap-blog.ru/tools/getlonglat-ymap2.html)
			zoom: 17, // определяем уровеь масштабирования
			controls: ['zoomControl'], // выбираем какие элементы управления отоброжать
			behaviors: ['drag'] // отключаем масштабирование - включаем перетаскивание
		});
		//Добавляем всплывающую подсказку (hint)
		var placemark = new ymaps.Placemark([59.9386, 30.3231], {
				hintContent: 'Gllasy Shop' //контент хинта
			},
			//изображение хинта
			{
				iconLayout: 'default#image', //название
				iconImageHref: 'images/baloon.png', //источник
				iconImageSize: [80, 140], //размер 
				iconImageOffset: [-40, -140] //координаты смещения
			});
		//вызываем метку с помощью коллекции geoObjects
		map.geoObjects.add(placemark);
	};
	/*********************************************
	 *END #YANDEX MAP
	 *********************************************/
});
/*********************************************
 *END #VANILLA SCRIPTS
 *********************************************/

/*********************************************
 *START #JQUERY SCRIPTS
 *********************************************/
$(document).ready(function () {
	/*********************************************
	 *START #UI SLIDER
	 *********************************************/
	$("#slider-range").slider({
		step: 50,
		range: true,
		min: 100,
		max: 500,
		values: [0, 350]
	});
	/*********************************************
	 *END #UI SLIDER
	 *********************************************/
});
/*********************************************
 *END #JQUERY SCRIPTS
 *********************************************/
