// INVOKED FUNCTION
(function () {
	// mobile menu
	const [hamburger, menu] = [document.querySelector('.hamburger'), document.querySelector('.menu')]
	// events
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('is-active');
		menu.classList.toggle('menu--open');
	})
	//-------------------------------------------
	// scroll to section
	const headerNavLinks = document.querySelectorAll('.menu__link');
	// events
	headerNavLinks.forEach(target => {
		target.addEventListener('click', e => {
			e.preventDefault();
			smoothScroll.scrollTo(target.getAttribute('href'), 800);
			menu.classList.remove('menu--open');
			hamburger.classList.remove('is-active')
		})
	})
	//-------------------------------------------
	// mixitup
	const containerEl = document.querySelector('.trending-list');
	const mixer = mixitup(containerEl);
	//-------------------------------------------
	window.onscroll = function () {
		scrollFunction()
	};

	function scrollFunction() {
		if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
			document.querySelector('.promo__image').style.zIndex = '0';
			document.querySelector('.nav').classList.add('nav--fixed');

		} else {
			document.querySelector('.promo__image').style.zIndex = '60';
			document.querySelector('.nav').classList.remove('nav--fixed');
		}

	}
})();