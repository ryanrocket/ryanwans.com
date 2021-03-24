function Default() {
	// constants
	window.addScript = (url) => {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url; 
		document.getElementsByTagName('head')[0].appendChild(script);
	}

	document.addEventListener('DOMContentLoaded', () => {
		const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
		if ($navbarBurgers.length > 0) {
			$navbarBurgers.forEach( el => {
			el.addEventListener('click', () => {
				const target = el.dataset.target;
				const $target = document.getElementById(target);
				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');
			});
			});
		}

		// flows
		if(window.location.pathname == "/" || window.location.pathname == "") {
			window.addScript("/Gradient.js");
		}
	});
};

export default Default