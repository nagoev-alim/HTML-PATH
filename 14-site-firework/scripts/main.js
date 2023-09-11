(function () {
	// accordion
	const faqItems = document.querySelectorAll('.faq-item');
	const faqTitles = document.querySelectorAll('.faq-item__title');

	// functions
	function toggleTab() {
		console.log(this);

		let parent = this.parentNode;

		faqItems.forEach(item => {
			if (parent === item) {
				parent.classList.toggle('selected');
				return;
			}
			item.classList.remove('selected');
		})
	}
	// events
	faqTitles.forEach(title => title.addEventListener('click', toggleTab))
})()