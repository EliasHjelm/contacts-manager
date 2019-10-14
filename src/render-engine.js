import startPage from './views/start-page';
import contactPage from './views/contact-page';
import newContactPage from './views/new-contact-page';

const pagesDictionary = {
	startPage,
	contactPage,
	newContactPage,
};

const renderPage = (page) => {
	console.log('Im gonna render page', page, 'from', pagesDictionary)
	emptyBody();
	document.body.appendChild(pagesDictionary[page]());
};

const emptyBody = () => {

	const { body } = document;

	while (body.hasChildNodes()) {
		body.removeChild(body.firstChild);
	}
};

export {
	renderPage,
}
