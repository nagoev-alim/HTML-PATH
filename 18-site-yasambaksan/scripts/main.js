

(function () {


	// MOBILE MENU
	const hamburger = document.querySelector('.hamburger');
	const menu = document.querySelector('.menu');
	// events
	hamburger.addEventListener("click", function () {
		this.classList.toggle("is-active");
		menu.classList.toggle('menu--open');
	})

	const headerNavLinks = document.querySelectorAll('.menu__link');
	// events
	headerNavLinks.forEach(function (target) {
		target.addEventListener('click', function (e) {
			e.preventDefault();
			smoothScroll.scrollTo(this.getAttribute('href'), 800);
			menu.classList.remove('menu_open');
			hamburger.classList.remove('is-active')
		})
	})
	window.onscroll = function () {
		scrollFunction()
	};

	function scrollFunction() {
		document.body.scrollTop > 100 ||
			document.documentElement.scrollTop > 100 ? document.querySelector('.nav__wrapper').classList.add('nav__wrapper--fixed') :
			document.querySelector('.nav__wrapper').classList.remove('nav__wrapper--fixed')
	}
	const photo = new Swiper('.photo-container', {
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpointsInverse: true,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
				spaceBetween: 30
			},
		}
	});
	const reviews = new Swiper('.reviews-container', {
		autoHeight: true,
		centeredSlides: true,
		spaceBetween: 60,
		// loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});


})()