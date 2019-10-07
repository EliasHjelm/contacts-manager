import { renderPage } from './render-engine';
import startPage from './views/start-page';
import contactPage from './views/contact-page';
import { createContact } from './contact-model';

const pagesDictionary = {
	startPage,
	contactPage,
};

const fakeContact = {
	name: 'Leffe',
	emails: ['don_leffe@hotmail.se'],
	number: ['0701485999'],
};

const state = {
	view: 'startPage',
	contacts: [createContact(fakeContact)],
};

const handler = {
	set: function(object, property, newValue) {
		if (property === 'view' && object[property] !== newValue) {
			renderPage(pagesDictionary[newValue]());

			object[property] = newValue;
		}
	},
};
		
const proxiedState = new Proxy(state, handler);

export default proxiedState;
