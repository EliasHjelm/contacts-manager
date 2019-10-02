import { renderPage } from './render-engine';
import startPage from './start-page';
import contactPage from './views/contact-page';

const pagesDictionary = {
	startPage,
	contactPage,
};

const state = {
	view: 'startPage',
	contacts: [],
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
