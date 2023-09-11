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
	headerNavLinks.forEach(function (target) {
		target.addEventListener('click', function (e) {
			e.preventDefault();
			smoothScroll.scrollTo(this.getAttribute('href'), 800);
			menu.classList.remove('menu--open');
			hamburger.classList.remove('is-active')
		})
	})
	//-------------------------------------------
	// accordion
	const accordionItem = document.querySelectorAll('.accordion-item');
	const accordionItemHead = document.querySelectorAll('.accordion-item__panel');
	// events
	accordionItemHead.forEach(item => item.addEventListener('click', () => {
		accordionItem.forEach(child => {
			if (child === item.parentNode) {
				item.parentNode.classList.toggle('selected');
				return;
			}
			// close prev child content
			child.classList.remove('selected')
		})
	}));
	// swiper
	const testimonials = new Swiper('.testimonials-container', {
		spaceBetween: 100,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	const promo = new Swiper('.promo-container', {
		autoplay: {
			delay: 20000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return `<button class="${className}">
							<span class="dot-counter"> 0${index + 1}</span>
						</button>`;
			},
		},
	});
	// modal map
	const callModal = document.querySelector('.map__link');
	const modalMap = document.querySelector('.modal-map');
	const exitModal = document.querySelector('.modal-map__exit');
	callModal.addEventListener('click', event => {
		event.preventDefault();
		modalMap.classList.add('modal-map--open');
	});
	exitModal.addEventListener('click', event => {
		event.preventDefault();
		modalMap.classList.remove('modal-map--open');
	});
	// counts stats
	const counts = document.querySelectorAll('.stats-list__count');
	const countsValues = [42, 123, 15, 99, 24];
	function scoreCounting(startPos, endPos, intervalValue) {
		let score = 0;
		let timer = setInterval(() => {
			if (score < startPos) {
				score++;
				endPos.textContent = score;
			} else {
				clearInterval(timer);
			}
		}, intervalValue);
	}
	setTimeout(() => {
		scoreCounting(countsValues[0], counts[0], 60);
		scoreCounting(countsValues[1], counts[1], 60);
		scoreCounting(countsValues[2], counts[2], 60);
		scoreCounting(countsValues[3], counts[3], 60);
		scoreCounting(countsValues[4], counts[4], 60);
	}, 2000);

})();