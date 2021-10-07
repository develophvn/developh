export default async function landingPageAnimation() {
	// const root = document.getElementById('shadow-dom').shadowRoot.children[0];
	// const root = document.getElementById('shadow-dom').children[0];

	const executeHotScript = (path) => {
		let temp = document.createElement('script');
		temp.src = path;
		document.getElementsByTagName('head')[0].appendChild(temp);
		// document.getElementById('cheater').appendChild(temp);
		// document.getElementsByTagName('html')[0].appendChild(temp)

		// temp = document.createElement('script');
		// temp.src = path;
		// root.appendChild(temp)
		// root.children[1].appendChild(temp)
		console.log('added')
		console.log(temp)
	}

	// hash
	document.getElementsByTagName('html')[0].setAttribute("data-wf-page","60cacdc34d2a0e6df119b3b2")
	// root.setAttribute("data-wf-page","60cacdc34d2a0e6df119b3b2")

	// console.log(document.getElementsByTagName('html'))
	// console.log(root)

	await executeHotScript("https://code.jquery.com/jquery-3.5.1.min.js")
	await new Promise(r => setTimeout(r, 2000));
	await executeHotScript("./landing_page.animation.js")
}