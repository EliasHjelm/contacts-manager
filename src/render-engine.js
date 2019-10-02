const renderPage = (page) => {
	emptyBody();
	document.body.appendChild(page);
};

const emptyBody = () => {

	const { body } = document;

	while (body.hasChildNodes()) {
		console.log('removing once');
		body.removeChild(body.firstChild);
	}
};

export {
	renderPage,
}
