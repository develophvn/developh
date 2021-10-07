function executeHotScript(path) {
	let temp = document.createElement('script');
	temp.src = path;
	document.getElementsByTagName('head')[0].appendChild(temp);
}

export default async function startAnimation() {
	// set hash - the key for animation script
	document.getElementsByTagName('html')[0].setAttribute("data-wf-page","60cacdc34d2a0e6df119b3b2")

	await executeHotScript("https://code.jquery.com/jquery-3.5.1.min.js")
	await new Promise(r => setTimeout(r, 700));
	await executeHotScript("./landing_page.animation.js")

	// try to load lib again if failed
	if (window.jQuery === undefined) {
		// script loaded too fast
		await new Promise(r => setTimeout(r, 3000)); // wait longer
		await executeHotScript("./landing_page.animation.js")
	}

}