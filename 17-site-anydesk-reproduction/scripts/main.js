
(function () {
	// MOBILE MENU
	const hamburger = document.querySelector('.hamburger');
	const menu = document.querySelector('.menu');
	// events
	hamburger.addEventListener("click", function () {
		this.classList.toggle("is-active");
		menu.classList.toggle('menu--open');
	})
	// SCROLL TO SECTION
	const headerNavLinks = document.querySelectorAll('.menu__link');
	const btnTop = document.querySelector('.btn-top');
	// events
	headerNavLinks.forEach(function (target) {
		target.addEventListener('click', function (e) {
			e.preventDefault();
			smoothScroll.scrollTo(this.getAttribute('href'), 800);
			menu.classList.remove('menu_open');
			hamburger.classList.remove('is-active')
		})
	})
	btnTop.addEventListener('click', function (e) {
		e.preventDefault();
		smoothScroll.scrollTo(this.getAttribute('href'), 800);
	});
	// SHOW BTN TO TOP
	const header = document.querySelector('.promo');
	const headerHeight = header.offsetHeight;
	let scrollPosition = window.scrollY;

	window.addEventListener('scroll', () => {
		scrollPosition = window.scrollY;
		if (scrollPosition > headerHeight) {
			btnTop.classList.add('btn-top--show');
		} else {
			btnTop.classList.remove('btn-top--show');
		}
	})


	// HIDE ON SCROLL
	function debounce(func, wait = 10, immediate = true) {
		let timeout;
		return function () {
			let context = this,
				args = arguments;
			let later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			let callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	let scrollPos = 0;
	const nav = document.querySelector('.nav');

	function checkPosition() {
		let windowY = window.scrollY;
		if (windowY < scrollPos) {
			// Scrolling UP
			nav.classList.add('is-visible');
			nav.classList.remove('is-hidden');
		} else {
			// Scrolling DOWN
			nav.classList.add('is-hidden');
			nav.classList.remove('is-visible');
		}
		scrollPos = windowY;
	}

	// window.addEventListener('scroll', checkPosition);
	window.addEventListener('scroll', debounce(checkPosition));
})()


if (document.body.classList.contains('index-body')) {
	const advantages = new Swiper('.swiper-container', {
		spaceBetween: 50,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}