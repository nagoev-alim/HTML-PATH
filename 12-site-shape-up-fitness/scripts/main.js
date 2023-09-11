// LIBRARY
// SCROLL TO SECTION ================================================
(function (window) {
	'use strict'; var document = window.document; var body = document.body; var rootElement = document.documentElement; var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (func) { window.setTimeout(func, 15) }; var clock = ''; var time = 500; var context = window; var start = context.scrollTop || window.pageYOffset; var end = 0; var easeInOutCubic = function (t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }; var getTargetTop = function (target) {
		var targetElement = {}; if (typeof target === 'number') { return target } else if (typeof target === 'string') {
			targetElement = document.querySelector(target); if (!targetElement) { return !1 }
			return targetElement.getBoundingClientRect().top + window.pageYOffset
		}
		return !1
	}; var getScrollTop = function (startV, endV, elapsed, duration) {
		if (elapsed > duration) { return endV }
		return startV + (end - startV) * easeInOutCubic(elapsed / duration)
	}; var getScrollPageBottom = function () { var contentHeight = Math.max.apply(null, [body.clientHeight, body.scrollHeight, rootElement.scrollHeight, rootElement.clientHeight]); return contentHeight - window.innerHeight }; var scrollFrame = function () {
		var elapsed = Date.now() - clock; if (context === window) { window.scroll(0, getScrollTop(start, end, elapsed, time)) } else { context.scrollTop = getScrollTop(start, end, elapsed, time) }
		if (elapsed <= time) { requestAnimationFrame(scrollFrame) }
	}; var SmoothScroll = function SmoothScroll() { }; SmoothScroll.prototype = { scrollTo: function (target, duration, root) { clock = Date.now(); time = duration || 500; context = root || window; start = context.scrollTop || window.pageYOffset; end = getTargetTop(target); scrollFrame() }, scrollTop: function (duration, root) { this.scrollTo(0, duration, root) }, scrollBottom: function (duration, root) { this.scrollTo(getScrollPageBottom(), duration, root) } }; window.smoothScroll = new SmoothScroll()
}(window))

// MOBILE MENU ==================================
const mobileMenu = (function () {
	const hamburger = document.querySelector('.hamburger');
	const menu = document.querySelector('.menu');
	// events
	hamburger.addEventListener('click', function () {
		this.classList.toggle("is-active");
		menu.classList.toggle('menu_open');
	})
})();
mobileMenu;

// SCROLL TO SECTION=========================================
const scrollToSection = (function () {
	const hamburger = document.querySelector('.hamburger');
	const menu = document.querySelector('.menu');
	var headerNavLinks = document.querySelectorAll('.menu__link');
	// events
	headerNavLinks.forEach(function (target) {
		target.addEventListener('click', function (e) {
			e.preventDefault();
			smoothScroll.scrollTo(this.getAttribute('href'), 800);
			menu.classList.remove('menu_open');
			hamburger.classList.remove('is-active')
		})
	})

})();
scrollToSection;

// HIDE ON SCTOLL DOWN=========================================
const hideOnShow = (function () {
	let scrollPos = 0;
	const nav = document.querySelector('.nav');

	function checkPosition() {
		let windowY = window.scrollY;
		if (windowY < scrollPos) {
			// Scrolling UP
			nav.classList.add('fixed');
			nav.style.top = '0px';
		} else {
			// Scrolling DOWN
			nav.classList.remove('fixed');
			nav.style.top = '-70px';
		}
		scrollPos = windowY;
	}

	window.addEventListener('scroll', checkPosition);
})();
hideOnShow;


// SWIPER ====================================
const testimonials = new Swiper('.testimonials__swiper-container', {
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// Responsive breakpoints
	breakpointsInverse: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		480: {
			spaceBetween: 20
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 30,
			slidesPerGroup: 2
		}
	}
});

const price = new Swiper('.price__swiper-container', {
	// slidesPerView: 5,
	spaceBetween: 30,
	freeMode: true,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// Responsive breakpoints
	breakpointsInverse: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		640: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		1000: {
			slidesPerView: 5
		}
	}
});

const gallery = (function () {
	const mainImg = document.querySelector('.gallery-main__image');
	const imgsList = document.querySelectorAll('.gallery-list__image');
	const btnList = document.querySelectorAll('.gallery-list__item');
	btnList.forEach((button, index) => {
		button.addEventListener('click', (event) => {
			event.preventDefault();
			mainImg.src = imgsList[index].src;
			btnList.forEach(button => button.classList.remove('select'))
			btnList[index].classList.add('select')
		})

	})
})();
gallery;