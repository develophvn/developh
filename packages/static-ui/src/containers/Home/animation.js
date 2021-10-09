function executeHotScript(path) {
	let temp = document.createElement('script');
	temp.src = path;
	document.getElementsByTagName('head')[0].appendChild(temp);
}

function waitUntilJqueryFullyLoaded(callback) {
	let attempts = 0;
	(function waitForElement() {
		if (typeof window.jQuery !== "undefined") {
			callback()
			console.log("Loaded at attempt ", attempts)
		} else {
			// script loaded too fast -> try again
			attempts++;
			setTimeout(waitForElement, 250);
		}
	})()
}

export default function startAnimation() {
	// set hash - the *key* for animation script
	document.getElementsByTagName('html')[0].setAttribute("data-wf-page","60cacdc34d2a0e6df119b3b2")
	executeHotScript("https://code.jquery.com/jquery-3.5.1.min.js") // can't use async await here because of its nature
	waitUntilJqueryFullyLoaded(() => executeHotScript("/landing_page.animation.js"))
}