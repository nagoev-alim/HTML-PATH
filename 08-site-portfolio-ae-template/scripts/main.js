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


// SCROLL TO SECTION=========================================
const scrollToSection = (function () {
	var headerNavLinks = document.querySelectorAll('.menu__link');
	// events
	headerNavLinks.forEach(function (target) {
		target.addEventListener('click', function (e) {
			e.preventDefault();
			smoothScroll.scrollTo(this.getAttribute('href'), 800);


		})
	})

})();
scrollToSection;

