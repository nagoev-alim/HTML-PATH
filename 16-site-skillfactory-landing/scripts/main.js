
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



// ADD FIXED NAVIGATION =======================================
const fixedNav = (function () {
	window.onscroll = function () {
		scrollFunction()
	};

	function scrollFunction() {
		document.body.scrollTop > 1 ||
			document.documentElement.scrollTop > 1 ? document.querySelector('.nav').classList.add('nav--fixed') :
			document.querySelector('.nav').classList.remove('nav--fixed')
	}
})();
fixedNav;

// SWIPER

if (document.body.classList.contains('home-body')) {
	const testimonials = new Swiper('.testimonials__container', {
		autoHeight: true, //enable auto height
		spaceBetween: 20,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// Responsive breakpoints
		breakpointsInverse: true,
		breakpoints: {
			// when window width is >= 640px
			640: {

			}
		}
	});
	const experts = new Swiper('.experts__container', {
		autoHeight: true, //enable auto height
		spaceBetween: 20,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// Responsive breakpoints
		breakpointsInverse: true,
		breakpoints: {
			// when window width is >= 640px
			640: {

			}
		}
	});
}
