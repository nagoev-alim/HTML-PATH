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
const nav = document.querySelector('.site-nav');

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



/*------------------------------------------

 => HTML CODE:

<nav class="site-nav">
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Images</a></li>
		<li><a href="#">Locations</a></li>
		<li><a href="#">Maps</a></li>
	</ul>
</nav>

=> CSS CODE:
.site-nav {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	transition: transform 0.25s;
}

.site-nav.is-hidden {
	transform: translateY(-100%);
}

.site-nav.is-visible {
	transform: translateY(0);
}
------------------------------------------*/