import startPage from './views/start-page';
import newContactPage from './views/new-contact-page';
import editContactPage from './views/edit-contact-page';
import notFound from './views/not-found';

const pagesDictionary = {
	startPage,
	newContactPage,
	editContactPage,
};

const renderPage = (page) => {

	emptyBody();

	if (/edit-contact/.test(page)) {

		document.body.appendChild(editContactPage());

	} else if (pagesDictionary[page]) {

		document.body.appendChild(pagesDictionary[page]());

	} else {

		document.body.appendChild(notFound());

	}


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
