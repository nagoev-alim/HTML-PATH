
// MOBILE MENU ==================================
const mobileMenu = (function () {
	const hamburger = document.querySelector('.hamburger');
	const menu = document.querySelector('.menu');
	// events
	hamburger.addEventListener("click", function () {
		this.classList.toggle("is-active");
		menu.classList.toggle('menu_open');
	})
})();
mobileMenu;
